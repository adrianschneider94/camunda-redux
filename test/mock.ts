import MockAdapter from "axios-mock-adapter"
import axios from "axios"
import thunk, {ThunkDispatch} from "redux-thunk"
import configureStore from "redux-mock-store"
import {AnyAction} from "redux"

let mock = new MockAdapter(axios)
mock.onGet('/todos/1',).reply(200, {
    id: '1',
    text: 'TEST'
})

mock.onGet('/todos/2',).reply(404, {
    id: '2',
    text: 'TEST'
})


//Setup the store
export function buildStore(initialState: any = {}) {
    let middlewares = [thunk] // add your middlewares like `redux-thunk`
    let mockStore = configureStore<any, ThunkDispatch<any, void, AnyAction>>(middlewares)
    return mockStore(initialState)
}