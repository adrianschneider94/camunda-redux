import {FSA} from "flux-standard-action"
import {Reducer} from "redux"


export function createMapReducer<T>(innerReducer: Reducer): Reducer {
    function mapReducer(previousState: { [k: string]: T } = {}, action: FSA<string, { id: string }>): { [k: string]: T } {
        if (action.payload && action.payload.id) {
            const innerResult = innerReducer(previousState[action.payload.id], action)
            if (innerResult) {
                return {
                    ...previousState,
                    [action.payload.id]: innerResult
                }
            } else {
                return previousState
            }
        }
        return previousState
    }

    return mapReducer
}

export function createDefaultReducer(entityName: string): Reducer {
    function defaultReducer(previousState: any, action: FSA<string, { entityName: string, data: Object }, {}>) {
        if (action.type === 'UPDATE_ENTITY') {
            if (action.payload && action.payload.entityName && action.payload.entityName === entityName) {
                return {
                    ...previousState,
                    ...action.payload.data,
                    fetching: false,
                    fetchError: false
                }
            }
        } else if (action.type === 'START_FETCHING_ENTITY') {
            if (action.payload && action.payload.entityName && action.payload.entityName === entityName) {
                return {
                    ...previousState,
                    fetching: true,
                    fetchError: false
                }
            }
        }

        return undefined
    }

    return defaultReducer
}