import axios, {AxiosResponse} from 'axios'
import {getOptimism} from "redux-optimism/dist"
import {objectFilter} from "redux-optimism/dist/enhancer"
import {FSA} from "./types"

type createFetchArgs<args> = {
    resourceName: string,
    method: string,
    url: ((args: args) => string) | string,
    data?: ((args: args) => Object) | Object,
    id?: ((args: args) => string) | string,
    processResponse?: (data: AxiosResponse) => Object,
    invalidate?: (data: AxiosResponse) => boolean
}

const defaultFetchArgs: createFetchArgs<any> = {
    resourceName: '',
    method: 'GET',
    url: '',
    data: {},
    id: (args) => args.id,
    processResponse: (response: AxiosResponse) => response.data,
    invalidate: () => false
}

interface dictState<entry> {
    [id: string]: entry
}

interface StartFetchAction extends FSA {
    payload: {
        id: string
    }
}

interface UpdateAction extends FSA {
    payload: {
        id: string,
        data: any
    }
}


interface FailAction extends FSA {
    payload: {
        id: string,
        error: any,
        invalidate?: boolean
    }
}

export function createFetch<args>(options: createFetchArgs<args>) {

    const o = {
        ...defaultFetchArgs,
        ...options
    }
    return function (args: args) {
        return async function (dispatch: Function) {
            dispatch({
                type: 'START_FETCHING_' + o.resourceName,
                payload: {id: typeof o.id === 'function' ? o.id(args) : o.id}
            })

            try {
                let response = await axios({
                    method: 'GET',
                    url: typeof o.url === 'function' ? o.url(args) : o.url,
                    data: typeof o.data === 'function' ? o.data(args) : o.data
                })


                dispatch({
                    type: 'UPDATE_' + o.resourceName,
                    payload: {
                        id: typeof o.id === 'function' ? o.id(args) : o.id,
                        data: typeof o.processResponse === 'function' ? o.processResponse(response) : response.data
                    }
                })

            } catch (error) {
                dispatch({
                    type: 'FETCHING_' + o.resourceName + '_FAILED',
                    payload: {
                        id: typeof o.id === 'function' ? o.id(args) : o.id,
                        error: error,
                        invalidate: (error.response) && (typeof o.invalidate === 'function') ? o.invalidate(error.response) : false
                    },
                    error: true
                })
            }
        }
    }
}


export function createReducer<entry>(resourceName: string) {
    return function (previousState: dictState<entry>, action: StartFetchAction | UpdateAction | FailAction) {
        switch (action.type) {
            case 'START_FETCHING_' + resourceName:
                let startFetchAction = action as StartFetchAction
                return {
                    ...previousState,
                    [startFetchAction.payload.id]: {
                        ...previousState[startFetchAction.payload.id],
                        isFetching: true,
                        fetchError: false
                    }
                }
            case 'UPDATE_' + resourceName:
                let updateAction = action as UpdateAction
                return {
                    ...previousState,
                    [updateAction.payload.id]: {
                        ...updateAction.payload.data,
                        isFetching: false,
                        fetchError: false
                    }
                }
            case 'FETCHING_' + resourceName + '_FAILED':
                let failAction = action as FailAction
                if (failAction.payload.invalidate) {
                    return objectFilter(previousState, ([id, value]) => id !== failAction.payload.id)
                } else {
                    return {
                        ...previousState,
                        [failAction.payload.id]: {
                            ...previousState[failAction.payload.id],
                            error: failAction.payload.error,
                            isFetching: false,
                            fetchError: true
                        }
                    }
                }

            default:
                return previousState
        }
    }
}

function completeTask(taskId: string) {
    return async (dispatch: Function) => {
        let {optimistic, commit, rollback} = getOptimism(dispatch)
        optimistic({type: 'COMPLETE_TASK', payload: {id: taskId}})
        try {
            let response = await axios({
                method: 'POST',
                url: '/task/' + taskId + "/complete"
            })
            commit()
            dispatch({type: 'COMPLETE_TASK', payload: {id: taskId}})
        } catch (e) {
            rollback()
        }
    }
}

