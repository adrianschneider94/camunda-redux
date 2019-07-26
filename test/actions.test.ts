import 'mocha'
import {expect} from 'chai'
import {makeOptimistic} from 'redux-optimism'
import {createResource} from "../src/CreateResource"
import {buildStore} from "./mock"

// Shape of a state entry
type Todo = {
    id: string,
    text: string
}

// Tests
describe("Action creators", () => {

    // Create our resource
    let {fetch: fetchTodo} = createResource<Todo, { id: string }>('TODO', {
        url: args => ('/todos/' + args.id),
    })

    it('Start Fetching action', async () => {
        let store = buildStore()

        await store.dispatch(fetchTodo({id: '1'}))
        expect(store.getActions()[0]).to.deep.equal({type: 'START_FETCHING_TODO', payload: {id: '1'}})
    })

    it('Update action', async () => {
        let store = buildStore()

        await store.dispatch(fetchTodo({id: '1'}))
        expect(store.getActions()[1]).to.deep.equal({
            type: 'UPDATE_TODO',
            payload: {
                id: '1',
                data: {id: '1', text: 'TEST'}
            }
        })
    })

    it('Failed action', async () => {
        let store = buildStore()

        await store.dispatch(fetchTodo({id: '2'}))
        expect(store.getActions()[1]).to.include({
            type: 'FETCHING_TODO_FAILED',
            error: true
        })
        expect(store.getActions()[1].payload).to.include({id: "2"})
    })
})
