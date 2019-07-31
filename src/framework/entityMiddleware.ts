import {Middleware} from "redux"
import $RefParser from "json-schema-ref-parser"
import {objectMap, parse, store as entityStore} from "normalizr-json-schema"
import {FSA} from "flux-standard-action"
import {normalize} from "normalizr"


export function CreateEntityMiddleware(schemas: Array<string>): Middleware {
    let loadingFinished = Promise.all(schemas.map((schema: string) => $RefParser.dereference(schema))).then((schemas) => {
        // console.log(JSON.stringify(schemas, null, 4))
        schemas.map((schema) => parse(schema))
    })
    return store => next => action => {
        if (action.meta && action.meta.entity) {
            loadingFinished.then((result) => {
                    entityMiddleware(store)(next)(action)
                }
            ).catch((e) => {
                    throw e
                }
            )
        } else {
            next(action)
        }
    }
}

const entityMiddleware: Middleware = store => next => (action: FSA<string, any, any>) => {
    if (action.meta && action.meta.entity !== undefined) {
        if (action.meta.action === 'START_FETCHING') {
            next({
                type: 'START_FETCHING_ENTITY',
                payload: {
                    id: action.payload.id,
                    entityName: action.meta.entityName
                }
            })
        } else if (action.meta.action === 'FETCH_SUCCEEDED') {
            let normalizedData = normalize(action.payload.data, entityStore[action.meta.entity])
            objectMap(normalizedData.entities, ([entityName, entities]: [string, any]) => {
                objectMap(entities, ([id, data]: [string, any]) => {
                    next({
                        type: 'UPDATE_ENTITY',
                        payload: {
                            id: id,
                            data: data,
                            entityName: entityName
                        }
                    })
                    return [id, data]
                })
                return [entityName, entities]
            })
        } else {
            next(action)
        }

    } else {
        next(action)
    }
}
