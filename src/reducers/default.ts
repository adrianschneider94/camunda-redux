import {FSAAuto, isFSA as isFSA_} from "flux-standard-action"
import {Reducer} from "redux"
import {mapType} from "../state"

function isFSA<B, C>(action: any): action is FSAAuto<string, B, C> {
    return isFSA_<string, B, C>(action)
}

interface defaultShape {
    id: string
}

export function createMapReducer<T>(innerReducer: (previousState: T | undefined, action: FSAAuto<string, any, any>) => T | undefined): Reducer<mapType<T>, FSAAuto<string, any, any>> {
    function mapReducer(previousState: { [k: string]: T } | undefined = {}, action: FSAAuto<string, any, any>): { [k: string]: T } {
        if (isFSA<{ id: string }, {}>(action)) {
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
        }
        return previousState
    }

    return mapReducer
}

export function createDefaultReducer(entityName: string) {
    function defaultReducer(previousState: any, action: FSAAuto<string, any, any>) {

        if (isFSA<{ entityName: string, data: Object }, any>(action)) {
            if (action.type === 'UPDATE_ENTITY') {
                if (action.payload.entityName === entityName) {
                    return {
                        ...previousState,
                        ...action.payload.data,
                        fetching: false,
                        fetchError: false
                    }
                }
            }

        }

        if (isFSA<{ entityName: string }, any>(action)) {
            if (action.type === 'START_FETCHING_ENTITY') {
                if (action.payload && action.payload.entityName && action.payload.entityName === entityName) {
                    return {
                        ...previousState,
                        fetching: true,
                        fetchError: false
                    }
                }

            }
        }
    }

    return defaultReducer
}