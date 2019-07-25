import 'mocha'
import {expect} from 'chai'
import configureStore from 'redux-mock-store'
import thunk, {ThunkDispatch} from 'redux-thunk'
import {makeOptimistic} from 'redux-optimism'
import {createFetch} from "../src/APIHandler"
import {AnyAction} from "redux"
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

type DispatchExts = ThunkDispatch<any, void, AnyAction>;

var mock = new MockAdapter(axios)
mock.onGet('/todos/1',).reply(200, {
    id: '1',
    text: 'TEST'
})

mock.onGet('/todo/1',).reply(404, {
    id: '1',
    text: 'TEST'
})


function buildStore(initialState: any = {}) {
    let middlewares = [thunk] // add your middlewares like `redux-thunk`
    let mockStore = configureStore<any, DispatchExts>(middlewares)
    return mockStore(initialState)
}

describe("Action creators", () => {

    it('Start Fetching action', async () => {
        let store = buildStore()

        const fetchTodo = createFetch<{ id: string }>({
            resourceName: 'TODO',
            id: args => args.id,
            url: args => ('/todos/' + args.id),
            method: 'GET'
        })

        await store.dispatch(fetchTodo({id: '1'}))
        let actions = store.getActions()
        expect(actions[0]).to.deep.equal({type: 'START_FETCHING_TODO', payload: {id: '1'}})
    })

    it('Update action', async () => {
        let store = buildStore()

        const fetchTodo = createFetch<{ id: string }>({
            resourceName: 'TODO',
            id: args => args.id,
            url: args => ('/todos/' + args.id),
            method: 'GET'
        })

        await store.dispatch(fetchTodo({id: '1'}))
        let actions = store.getActions()
        expect(actions[1]).to.deep.equal({
            type: 'UPDATE_TODO',
            payload: {
                id: '1',
                data: {id: '1', text: 'TEST'}
            }
        })
    })


    it('Failed action', async () => {
        let store = buildStore()

        const fetchTodo = createFetch<{ id: string }>({
            resourceName: 'TODO',
            id: args => args.id,
            url: args => ('/todo/' + args.id),
            method: 'GET'
        })

        await store.dispatch(fetchTodo({id: '1'}))
        let actions = store.getActions()
        expect(actions[1]).to.include({
            type: 'FETCHING_TODO_FAILED',
            error: true
        })
        expect(actions[1].payload).to.include({id: "1"})
    })


})
