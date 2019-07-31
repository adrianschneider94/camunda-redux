import {applyMiddleware, combineReducers, createStore} from 'redux'
import {CreateEntityMiddleware} from "./framework/entityMiddleware"
import thunk, {ThunkMiddleware} from 'redux-thunk'
import {createDefaultReducer, createMapReducer} from "./reducers/default"
import {createResource} from "./framework/fetch"
import {FSA} from "flux-standard-action"
import {Task, TaskList} from "./remoteTypes"


const rootReducer = combineReducers({
    tasks: createMapReducer<Task>(createDefaultReducer('Task')),
    taskLists: createMapReducer<TaskList>(createDefaultReducer('TaskList')),
    variableInstance: createMapReducer(createDefaultReducer('VariableInstance')),
    attachments: createMapReducer(createDefaultReducer('Attachment')),
    processDefinition: createMapReducer(createDefaultReducer('ProcessDefinition')),
    processDefinitionXML: createMapReducer(createDefaultReducer('ProcessDefinitionXML'))
})


const store = createStore(
    rootReducer,
    {},
    applyMiddleware(
        thunk as ThunkMiddleware<any, FSA>,
        CreateEntityMiddleware(["static/schemas/all.json"])
    )
)

const {fetch: fetchTask} = createResource<{ id: string }>(
    'Task',
    {url: args => "/task/" + args.id}
)

const {fetch: fetchTaskList} = createResource<{ id: string }>(
    'TaskList',
    {
        url: args => "/task/",
        transformResult: (result, args) => ({id: args.id, tasks: result})
    }
)

const {fetch: fetchVariableInstances} = createResource<{ id: string }>(
    'VariableInstanceList',
    {
        url: args => "/variable-instance/",
        transformResult: (result, args) => ({id: args.id, variableInstances: result})
    }
)

const {fetch: fetchAttachments} = createResource<{ id: string }>(
    'AttachmentList',
    {
        url: args => "/task/" + args.id + "/attachment/",
        transformResult: (result, args) => ({id: args.id, attachments: result})
    }
)

const {fetch: fetchProcessDefinition} = createResource<{ id: string }>(
    'ProcessDefinition',
    {
        url: args => "/process-definition/" + args.id
    }
)

const {fetch: fetchProcessDefinitionXML} = createResource<{ id: string }>(
    'ProcessDefinitionXML',
    {
        url: args => "/process-definition/" + args.id + '/xml'
    }
)
/**
 store.dispatch(fetchTask({id: '25d799a3-a3e7-11e9-82ca-0242ac110006'}))
 store.dispatch(fetchTaskList({id: 'test'}))
 store.dispatch(fetchVariableInstances({id: 'test'}))
 store.dispatch(fetchAttachments({id: "c7d40097-a30e-11e9-82ca-0242ac110006"}))
 */
store.dispatch(fetchProcessDefinition({id: "invoice:1:c62c91ee-a30e-11e9-82ca-0242ac110006"}))
store.dispatch(fetchProcessDefinitionXML({id: "invoice:1:c62c91ee-a30e-11e9-82ca-0242ac110006"}))

setTimeout(() => {
        console.log(store.getState())
    }, 2000
)
