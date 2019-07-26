import {createResource} from "./CreateResource"
import {CamundaState, State, Task} from "./state"
import axios from 'axios'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk, {ThunkMiddleware} from 'redux-thunk'
import {FSA} from "flux-standard-action"

axios.defaults.baseURL = 'http://docker1.sangl.com:8080/engine-rest'

enum resources {
    TODO = 'TODO'
}

let {fetch: fetchTask, reduce: reduceTask} = createResource<Task, { id: string }>(resources.TODO, {url: args => '/task/' + args.id})

let camundaReducer = combineReducers<CamundaState>({
    task: reduceTask,
    taskLists: () => ({}),
    variables: () => ({}),
    forms: () => ({}),
    startForms: () => ({}),
    processDefinitions: () => ({}),
    processXMLs: () => ({}),
    processInstanceStatistics: () => ({}),
    activityInstanceStatistics: () => ({}),
})

let rootReducer = combineReducers<State>({
    camunda: camundaReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<State, FSA>)
)

store.dispatch(fetchTask({id: '25d799a3-a3e7-11e9-82ca-0242ac110006'}))
setTimeout(() => console.log(store.getState()), 500)