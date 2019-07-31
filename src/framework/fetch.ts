import {Dispatch} from "redux"
import axios, {Method} from "axios"

axios.defaults.baseURL = 'http://docker1.sangl.com:8080/engine-rest/'
axios.defaults.auth = {username: 'demo', password: 'demo'}

function camelCaseToDash(string: string) {
    return string.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase()
}

type LooseOptions<fetchArgs> = {
    id?: ((args: fetchArgs) => string) | string,
    url: ((args: fetchArgs) => string) | string,
    method?: ((args: fetchArgs) => Method) | Method,
    data?: ((args: fetchArgs) => Object) | Object,
    params?: ((args: fetchArgs) => Object) | Object,
    deleteOn404?: ((args: fetchArgs) => boolean) | boolean
    transformResult?: ((result: Object, args: fetchArgs) => Object),
}

type StrictOptions<fetchArgs> = {
    id: ((args: fetchArgs) => string) | string,
    url: ((args: fetchArgs) => string) | string,
    method: ((args: fetchArgs) => Method) | Method,
    data: ((args: fetchArgs) => Object) | Object,
    params: ((args: fetchArgs) => Object) | Object,
    deleteOn404: ((args: fetchArgs) => boolean) | boolean
    transformResult: ((result: Object, args: fetchArgs) => Object),
}

const defaultOptions: StrictOptions<any> = {
    id: (fetchArgs: any) => fetchArgs.id,
    url: "undefined",
    method: "GET",
    data: {},
    params: {},
    deleteOn404: false,
    transformResult: (result) => result
}

export function createResource<fetchArgs>(resourceName: string, options: LooseOptions<fetchArgs>) {
    const o: StrictOptions<fetchArgs> = {
        ...defaultOptions,
        ...options
    }
    const fetch = (args: fetchArgs & { id: string }) => async (dispatch: Dispatch) => {
        let RESOURCE_NAME = camelCaseToDash(resourceName)
        dispatch({
            type: 'START_FETCHING_' + RESOURCE_NAME,
            payload: {
                id: typeof o.id === 'function' ? o.id(args) : o.id,
            },
            meta: {
                entityName: resourceName,
                action: 'START_FETCHING'
            }
        })

        try {
            let response = await axios(typeof o.url === 'function' ? o.url(args) : o.url,
                {
                    method: typeof o.method === 'function' ? o.method(args) : o.method,
                    data: typeof o.data === 'function' ? o.data(args) : o.data,
                    params: typeof o.params === 'function' ? o.params(args) : o.params
                }
            )
            dispatch({
                type: "UPDATE_" + RESOURCE_NAME,
                payload: {
                    data: o.transformResult(response.data, args)
                },
                meta: {
                    entity: resourceName,
                    action: 'FETCH_SUCCEEDED'
                }
            })
        } catch (e) {
            dispatch({
                type: "FETCHING_" + RESOURCE_NAME + "_FAILED",
                payload: {
                    id: typeof o.id === 'function' ? o.id(args) : o.id,
                },
                meta: {
                    entity: resourceName,
                    action: 'FETCH_FAILED'
                }
            })
        }


    }

    return {
        fetch
    }
}
