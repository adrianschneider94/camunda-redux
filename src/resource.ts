import $RefParser from "json-schema-ref-parser"
import {loadSchemas, normalize} from "json-schema-normalizer"

import {
    Attachment,
    AttachmentList,
    CandidateGroupCount,
    CommentList,
    Count,
    FormKey,
    IdentityLink,
    IdentityLinkList,
    Task,
    TaskList,
    Variable,
    VariableMap
} from "./jsonschemas/types"


export async function defineResource<ResourceType>(resourceName: string) {
    return await $RefParser.parse("src/jsonschemas/" + resourceName + ".json")
}

export async function loadResources() {
    let attachment = await defineResource<Attachment>('Attachment')
    let attachmentList = await defineResource<AttachmentList>('AttachmentList')
    let candidateGroupCount = await defineResource<CandidateGroupCount>('CandidateGroupCount')
    let comment = await defineResource<Comment>('Comment')
    let commentList = await defineResource<CommentList>('CommentList')
    let count = await defineResource<Count>('Count')
    let formKey = await defineResource<FormKey>('FormKey')
    let identityLink = await defineResource<IdentityLink>('IdentityLink')
    let identityLinkList = await defineResource<IdentityLinkList>('IdentityLinkList')
    let task = await defineResource<Task>('Task')
    let taskList = await defineResource<TaskList>('TaskList')
    let variable = await defineResource<Variable>('Variable')
    let variableMap = await defineResource<VariableMap>('VariableMap')
    console.log(attachmentList)
    loadSchemas([attachment, attachmentList, task, taskList])

}

let response = {
    id: "qttrt",
    tasks: [
        {
            "id": "253fe13b-a618-11e9-beb7-0242ac110002",
            "name": "Approve Invoice",
            "assignee": "demo",
            "created": "2019-07-14T09:17:04.588+0000",
            "due": "2019-07-21T09:17:04.588+0000",
            "followUp": null,
            "delegationState": null,
            "description": "Approve the invoice (or not).",
            "executionId": "253f1dc8-a618-11e9-beb7-0242ac110002",
            "owner": null,
            "parentTaskId": null,
            "priority": 50,
            "processDefinitionId": "invoice:2:c8d38663-a0ae-11e9-9c0a-0242ac110002",
            "processInstanceId": "253f1dc8-a618-11e9-beb7-0242ac110002",
            "taskDefinitionKey": "approveInvoice",
            "caseExecutionId": null,
            "caseInstanceId": null,
            "caseDefinitionId": null,
            "suspended": false,
            "formKey": "embedded:app:forms/approve-invoice.html",
            "tenantId": null
        }
        ,
        {
            "id": "6606c8e1-a617-11e9-beb7-0242ac110002",
            "name": "Approve Invoice",
            "assignee": null,
            "created": "2019-07-14T09:11:43.769+0000",
            "due": "2019-07-21T09:11:43.777+0000",
            "followUp": null,
            "delegationState": null,
            "description": "Approve the invoice (or not).",
            "executionId": "6605b74e-a617-11e9-beb7-0242ac110002",
            "owner": null,
            "parentTaskId": null,
            "priority": 50,
            "processDefinitionId": "invoice:2:c8d38663-a0ae-11e9-9c0a-0242ac110002",
            "processInstanceId": "6605b74e-a617-11e9-beb7-0242ac110002",
            "taskDefinitionKey": "approveInvoice",
            "caseExecutionId": null,
            "caseInstanceId": null,
            "caseDefinitionId": null,
            "suspended": false,
            "formKey": "embedded:app:forms/approve-invoice.html",
            "tenantId": null
        },
        {
            "id": "7fc99c32-a71d-11e9-beb7-0242ac110002",
            "name": "test\n\n",
            "assignee": null,
            "created": "2019-07-15T16:27:55.131+0000",
            "due": null,
            "followUp": null,
            "delegationState": null,
            "description": null,
            "executionId": "7fc926ff-a71d-11e9-beb7-0242ac110002",
            "owner": null,
            "parentTaskId": null,
            "priority": 50,
            "processDefinitionId": "Process_1:1:73a6767e-a71d-11e9-beb7-0242ac110002",
            "processInstanceId": "7fc926ff-a71d-11e9-beb7-0242ac110002",
            "taskDefinitionKey": "Task_1h0yy07",
            "caseExecutionId": null,
            "caseInstanceId": null,
            "caseDefinitionId": null,
            "suspended": false,
            "formKey": null,
            "tenantId": null
        },
        {
            "id": "b8826fb5-a70d-11e9-beb7-0242ac110002",
            "name": "Assign Reviewer",
            "assignee": null,
            "created": "2019-07-15T14:34:58.348+0000",
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
            "caseExecutionId": "b8822192-a70d-11e9-beb7-0242ac110002",
            "caseInstanceId": "b881d364-a70d-11e9-beb7-0242ac110002",
            "caseDefinitionId": "ReviewInvoiceCase:2:c8d6bab5-a0ae-11e9-9c0a-0242ac110002",
            "suspended": false,
            "formKey": "embedded:app:forms/assign-reviewer.html",
            "tenantId": null
        },
        {
            "id": "c9740c86-a0ae-11e9-9c0a-0242ac110002",
            "name": "Approve Invoice",
            "assignee": "demo",
            "created": "2019-07-07T12:00:17.608+0000",
            "due": "2019-07-14T12:00:17.615+0000",
            "followUp": null,
            "delegationState": null,
            "description": "Approve the invoice (or not).",
            "executionId": "c955aef7-a0ae-11e9-9c0a-0242ac110002",
            "owner": null,
            "parentTaskId": null,
            "priority": 50,
            "processDefinitionId": "invoice:1:c83faac9-a0ae-11e9-9c0a-0242ac110002",
            "processInstanceId": "c955aef7-a0ae-11e9-9c0a-0242ac110002",
            "taskDefinitionKey": "approveInvoice",
            "caseExecutionId": null,
            "caseInstanceId": null,
            "caseDefinitionId": null,
            "suspended": false,
            "formKey": "embedded:app:forms/approve-invoice.html",
            "tenantId": null
        },
        {
            "id": "ca743dc0-a0ae-11e9-9c0a-0242ac110002",
            "name": "Prepare\nBank\nTransfer",
            "assignee": null,
            "created": "2019-07-07T12:00:18.894+0000",
            "due": "2019-07-14T12:00:18.894+0000",
            "followUp": null,
            "delegationState": null,
            "description": "Prepare the bank transfer.",
            "executionId": "ca3845f7-a0ae-11e9-9c0a-0242ac110002",
            "owner": null,
            "parentTaskId": null,
            "priority": 50,
            "processDefinitionId": "invoice:1:c83faac9-a0ae-11e9-9c0a-0242ac110002",
            "processInstanceId": "ca3845f7-a0ae-11e9-9c0a-0242ac110002",
            "taskDefinitionKey": "prepareBankTransfer",
            "caseExecutionId": null,
            "caseInstanceId": null,
            "caseDefinitionId": null,
            "suspended": false,
            "formKey": "embedded:app:forms/prepare-bank-transfer.html",
            "tenantId": null
        },
        {
            "id": "caa05727-a0ae-11e9-9c0a-0242ac110002",
            "name": "Assign Reviewer",
            "assignee": null,
            "created": "2019-07-07T12:00:19.303+0000",
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
            "caseExecutionId": "ca9fe1f4-a0ae-11e9-9c0a-0242ac110002",
            "caseInstanceId": "ca9867d6-a0ae-11e9-9c0a-0242ac110002",
            "caseDefinitionId": "ReviewInvoiceCase:2:c8d6bab5-a0ae-11e9-9c0a-0242ac110002",
            "suspended": false,
            "formKey": "embedded:app:forms/assign-reviewer.html",
            "tenantId": null
        },
        {
            "id": "caaf9992-a0ae-11e9-9c0a-0242ac110002",
            "name": "Approve Invoice",
            "assignee": "demo",
            "created": "2019-07-07T12:00:19.677+0000",
            "due": "2019-07-14T12:00:19.677+0000",
            "followUp": null,
            "delegationState": null,
            "description": "Approve the invoice (or not).",
            "executionId": "caaed623-a0ae-11e9-9c0a-0242ac110002",
            "owner": null,
            "parentTaskId": null,
            "priority": 50,
            "processDefinitionId": "invoice:2:c8d38663-a0ae-11e9-9c0a-0242ac110002",
            "processInstanceId": "caaed623-a0ae-11e9-9c0a-0242ac110002",
            "taskDefinitionKey": "approveInvoice",
            "caseExecutionId": null,
            "caseInstanceId": null,
            "caseDefinitionId": null,
            "suspended": false,
            "formKey": "embedded:app:forms/approve-invoice.html",
            "tenantId": null
        }
    ]
}


loadResources().then(
    () => {
        let res = normalize('TaskList', response)
        //console.log(JSON.stringify(res, null, 4))
    }
)
