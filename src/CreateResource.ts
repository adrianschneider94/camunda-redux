import axios, {AxiosResponse} from 'axios'
import {objectFilter} from "redux-optimism/dist/enhancer"
import {FSAWithPayload} from "flux-standard-action"
import {AnyAction} from "redux"
import {DictAPIState} from "./types"

type StartFetchAction = FSAWithPayload<string, { id: string }, any>
type UpdateAction<ResourceShape> = FSAWithPayload<string, { id: string, data: ResourceShape }, any>
type FetchingFailedAction = FSAWithPayload<string, { id: string, error: Object, invalidate?: boolean }, any>


type LooseResourceOptions<ResourceShape, fetchArgs> = {
    method?: string,
    url: ((args: fetchArgs) => string) | string,
    data?: ((args: fetchArgs) => Object) | Object,
    id?: (args: fetchArgs) => string,
    processResponse?: (data: AxiosResponse) => Object,
    invalidate?: (data: AxiosResponse) => boolean,
    mapStateToResource?: (state: any) => DictAPIState<ResourceShape>
}

type StrictResourceOptions<stateShape, fetchArgs> = {
    method: string,
    url: ((args: fetchArgs) => string) | string,
    data?: ((args: fetchArgs) => Object) | Object,
    id: (args: fetchArgs) => string,
    processResponse: (data: AxiosResponse) => Object,
    invalidate: (data: AxiosResponse) => boolean,
    mapStateToResource: (state: any) => DictAPIState<stateShape>
}

const defaultFetchArgs: StrictResourceOptions<any, any> = {
    method: 'GET',
    url: '',
    data: {},
    id: (args) => args.id,
    processResponse: (response: AxiosResponse) => response.data,
    invalidate: () => false,
    mapStateToResource: state => state
}

export function createResource<ResourceShape, fetchArgs>(resourceName: string, options: LooseResourceOptions<ResourceShape, fetchArgs>) {
    const o: StrictResourceOptions<ResourceShape, fetchArgs> = {
        ...defaultFetchArgs,
        ...options
    }

    function createStartFetching(args: fetchArgs): StartFetchAction {
        return {
            type: 'START_FETCHING_' + resourceName,
            payload: {
                id: o.id(args)
            }
        }
    }


    function createUpdate(args: fetchArgs, data: ResourceShape): UpdateAction<ResourceShape> {
        return {
            type: 'UPDATE_' + resourceName,
            payload: {
                id: o.id(args),
                data: data
            }
        }
    }

    function createFetchingFailed(args: fetchArgs, error: Object): FetchingFailedAction {
        return {
            type: 'FETCHING_' + resourceName + '_FAILED',
            payload: {
                id: o.id(args),
                error: error
            },
            error: true
        }
    }

    function isStartFetchAction(action: AnyAction): action is StartFetchAction {
        return (action.type as string).match(new RegExp("START_FETCHING_" + resourceName, "g")) !== null
    }

    function isUpdateAction(action: AnyAction): action is UpdateAction<ResourceShape> {
        return (action.type as string).match(new RegExp("UPDATE_" + resourceName, "g")) !== null
    }

    function isFetchFailedAction(action: AnyAction): action is FetchingFailedAction {
        return (action.type as string).match(new RegExp("FETCHING_" + resourceName + "_FAILED", "g")) !== null
    }

    function fetch(args: fetchArgs): (dispatch: Function) => void {
        return async function (dispatch: Function): Promise<void> {
            dispatch(createStartFetching(args))
            try {
                let response = await axios({
                    method: 'GET',
                    url: typeof o.url === 'function' ? o.url(args) : o.url,
                    data: typeof o.data === 'function' ? o.data(args) : o.data
                })
                let data: ResourceShape = typeof o.processResponse === 'function' ? o.processResponse(response) : response.data
                dispatch(createUpdate(args, data))

            } catch (error) {
                dispatch(createFetchingFailed(args, error))
            }
        }
    }

    function reduce(previousState: DictAPIState<ResourceShape> | undefined, action: AnyAction): DictAPIState<ResourceShape> {
        if (!(previousState)) {
            return {}
        }

        if (isStartFetchAction(action)) {
            return {
                ...previousState,
                [action.payload.id]: {
                    ...previousState[action.payload.id],
                    isFetching: true,
                    fetchError: false
                }
            }

        }

        if (isUpdateAction(action)) {
            return {
                ...previousState,
                [action.payload.id]: {
                    ...action.payload.data,
                    isFetching: false,
                    fetchError: false
                }
            }
        }

        if (isFetchFailedAction(action)) {
            if (action.payload.invalidate) {
                return objectFilter(previousState, ([id, value]) => id !== action.payload.id)
            } else {
                return {
                    ...previousState,
                    [action.payload.id]: {
                        ...previousState[action.payload.id],
                        error: action.payload.error,
                        isFetching: false,
                        fetchError: true
                    }
                }
            }
        }

        return previousState
    }

    return {
        fetch,
        reduce,
        createStartFetching,
        createUpdate,
        createFetchingFailed,
        isStartFetchAction,
        isUpdateAction,
        isFetchFailedAction
    }
}
