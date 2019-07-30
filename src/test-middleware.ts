import {applyMiddleware, combineReducers, createStore} from 'redux'
import {CreateEntityMiddleware} from "./entityMiddleware"
import thunk, {ThunkMiddleware} from 'redux-thunk'
import {createDefaultReducer, createMapReducer} from "./reducers/default"
import {createResource} from "./fetch"
import {FSA} from "flux-standard-action"

let testData = {
    "id": "test",
    "tasks": [
        {
            "id": "5747a22c-b16b-11e9-a403-0242ac110002",
            "name": "Approve Invoice",
            "assignee": null,
            "created": "2019-07-28T19:10:19.544+0000",
            "due": "2019-08-04T19:10:19.550+0000",
            "followUp": null,
            "delegationState": null,
            "description": "Approve the invoice (or not).",
            "executionId": "572af24d-b16b-11e9-a403-0242ac110002",
            "owner": null,
            "parentTaskId": null,
            "priority": 50,
            "processDefinitionId": "invoice:1:55eeef8f-b16b-11e9-a403-0242ac110002",
            "processInstanceId": "572af24d-b16b-11e9-a403-0242ac110002",
            "taskDefinitionKey": "approveInvoice",
            "caseExecutionId": null,
            "caseInstanceId": null,
            "caseDefinitionId": null,
            "suspended": false,
            "formKey": "embedded:app:forms/approve-invoice.html",
            "tenantId": null
        },
        {
            "id": "58288c96-b16b-11e9-a403-0242ac110002",
            "name": "Prepare\nBank\nTransfer",
            "assignee": null,
            "created": "2019-07-28T19:10:20.646+0000",
            "due": "2019-08-04T19:10:20.646+0000",
            "followUp": null,
            "delegationState": null,
            "description": "Prepare the bank transfer.",
            "executionId": "57f0173d-b16b-11e9-a403-0242ac110002",
            "owner": null,
            "parentTaskId": null,
            "priority": 50,
            "processDefinitionId": "invoice:1:55eeef8f-b16b-11e9-a403-0242ac110002",
            "processInstanceId": "57f0173d-b16b-11e9-a403-0242ac110002",
            "taskDefinitionKey": "prepareBankTransfer",
            "caseExecutionId": null,
            "caseInstanceId": null,
            "caseDefinitionId": null,
            "suspended": false,
            "formKey": "embedded:app:forms/prepare-bank-transfer.html",
            "tenantId": null
        },
        {
            "id": "584e8a7d-b16b-11e9-a403-0242ac110002",
            "name": "Assign Reviewer",
            "assignee": "demo",
            "created": "2019-07-28T19:10:21.052+0000",
            "due": null,
            "followUp": null,
            "delegationState": null,
            "description": null,
            "executionId": null,
            "owner": null,
            "parentTaskId": null,
            "priority": 50,
            "processDefinitionId": null,
            "processInstanceId": null,
            "taskDefinitionKey": "PlanItem_1",
            "caseExecutionId": "584dee3a-b16b-11e9-a403-0242ac110002",
            "caseInstanceId": "5847ac9c-b16b-11e9-a403-0242ac110002",
            "caseDefinitionId": "ReviewInvoiceCase:2:568403ab-b16b-11e9-a403-0242ac110002",
            "suspended": false,
            "formKey": "embedded:app:forms/assign-reviewer.html",
            "tenantId": null
        },
        {
            "id": "585df3f8-b16b-11e9-a403-0242ac110002",
            "name": "Approve Invoice",
            "assignee": null,
            "created": "2019-07-28T19:10:21.368+0000",
            "due": "2019-08-04T19:10:21.369+0000",
            "followUp": null,
            "delegationState": null,
            "description": "Approve the invoice (or not).",
            "executionId": "585c9449-b16b-11e9-a403-0242ac110002",
            "owner": null,
            "parentTaskId": null,
            "priority": 50,
            "processDefinitionId": "invoice:2:567f21a9-b16b-11e9-a403-0242ac110002",
            "processInstanceId": "585c9449-b16b-11e9-a403-0242ac110002",
            "taskDefinitionKey": "approveInvoice",
            "caseExecutionId": null,
            "caseInstanceId": null,
            "caseDefinitionId": null,
            "suspended": false,
            "formKey": "embedded:app:forms/approve-invoice.html",
            "tenantId": null
        },
        {
            "id": "5877e4e1-b16b-11e9-a403-0242ac110002",
            "name": "Prepare\nBank\nTransfer",
            "assignee": null,
            "created": "2019-07-28T19:10:21.421+0000",
            "due": "2019-08-04T19:10:21.421+0000",
            "followUp": null,
            "delegationState": null,
            "description": "Prepare the bank transfer.",
            "executionId": "58665879-b16b-11e9-a403-0242ac110002",
            "owner": null,
            "parentTaskId": null,
            "priority": 50,
            "processDefinitionId": "invoice:2:567f21a9-b16b-11e9-a403-0242ac110002",
            "processInstanceId": "58665879-b16b-11e9-a403-0242ac110002",
            "taskDefinitionKey": "prepareBankTransfer",
            "caseExecutionId": null,
            "caseInstanceId": null,
            "caseDefinitionId": null,
            "suspended": false,
            "formKey": "embedded:app:forms/prepare-bank-transfer.html",
            "tenantId": null
        },
        {
            "id": "58885ef8-b16b-11e9-a403-0242ac110002",
            "name": "Assign Reviewer",
            "assignee": "demo",
            "created": "2019-07-28T19:10:21.553+0000",
            "due": null,
            "followUp": null,
            "delegationState": null,
            "description": null,
            "executionId": null,
            "owner": null,
            "parentTaskId": null,
            "priority": 50,
            "processDefinitionId": null,
            "processInstanceId": null,
            "taskDefinitionKey": "PlanItem_1",
            "caseExecutionId": "588810d5-b16b-11e9-a403-0242ac110002",
            "caseInstanceId": "5887c2a7-b16b-11e9-a403-0242ac110002",
            "caseDefinitionId": "ReviewInvoiceCase:2:568403ab-b16b-11e9-a403-0242ac110002",
            "suspended": false,
            "formKey": "embedded:app:forms/assign-reviewer.html",
            "tenantId": null
        }
    ]
}
const rootReducer = combineReducers({
    tasks: createMapReducer(createDefaultReducer('Task')),
    taskLists: createMapReducer(createDefaultReducer('TaskList'))
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
    {url: args => "http://docker1.sangl.com:8080/engine-rest/task/" + args.id}
)

const {fetch: fetchTaskList} = createResource<{ id: string }>(
    'TaskList',
    {
        url: args => "http://docker1.sangl.com:8080/engine-rest/task/",
        transformResult: (result, args) => ({id: args.id, tasks: result})
    }
)

store.dispatch(fetchTask({id: '25d799a3-a3e7-11e9-82ca-0242ac110006'}))
store.dispatch(fetchTaskList({id: 'test'}))
setTimeout(() => {
        console.log(store.getState())
    }, 34
)