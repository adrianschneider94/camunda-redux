import {applyMiddleware, createStore} from 'redux'
import {CreateEntityMiddleware} from "./framework/entityMiddleware"
import thunk, {ThunkMiddleware} from 'redux-thunk'
import {FSA} from "flux-standard-action"
import {camundaRoot} from "./reducers/camundaRoot"
import {fetchTask, fetchTaskVariables} from "./actions/task"


const store = createStore(
    camundaRoot,
    {},
    applyMiddleware(
        thunk as ThunkMiddleware<any, FSA>,
        CreateEntityMiddleware(["static/schemas/all.json"])
    )
)


store.dispatch(fetchTask({id: '25d799a3-a3e7-11e9-82ca-0242ac110006'}))
store.dispatch(fetchTaskVariables({id: '25d799a3-a3e7-11e9-82ca-0242ac110006'}))

setTimeout(() => {
    console.log(JSON.stringify(store.getState(), null, 4))
    }, 2000
)
