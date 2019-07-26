import {DictAPIState} from "./types"

export type State = {
    camunda: CamundaState
}

export type CamundaState = {
    task: DictAPIState<Task>,
    taskLists: DictAPIState<TaskList>
    variables: DictAPIState<Variable>
    forms: DictAPIState<Form>
    startForms: DictAPIState<Form>
    processDefinitions: DictAPIState<ProcessDefinition>
    processXMLs: DictAPIState<ProcessXML>
    processInstanceStatistics: DictAPIState<ProcessInstanceStatistics>
    activityInstanceStatistics: DictAPIState<ActivityInstanceStatistics>
}

export type Task = {
    id: string,
    nam: string,
    assignee: string,
    created: string,
    due: string,
    followUp: string,
    delegationState: string,
    description: string,
    executionId: string,
    owner: string,
    parentTaskId: string,
    priority: number,
    processDefinitionId: string,
    processInstanceId: string,
    caseExecutionId: string,
    caseDefinitionId: string,
    caseInstanceId: string,
    taskDefinitionKey: string,
    suspended: boolean,
    formKey: string,
    tenantId: string,
}

export type Variable = {
    value: string | number | boolean | object,
    type: string,
    valueInfo: object
}

export type Form = {
    key: string,
    contextPath: string
}

export type TaskList = {
    tasks: Array<string>
}

export type ProcessDefinition = {
    id: string,
    key: string,
    category: string,
    description: string,
    name: string,
    version: number,
    resource: string,
    deploymentId: string,
    diagram: string,
    suspended: boolean,
    tenantId: string,
    versionTag: string,
    historyTimeToLive: number
}

export type ProcessXML = {
    id?: string
    bpmn20Xml: string
}

export type ProcessInstanceStatistics = {
    id: string,
    instances: number,
    failedJobs: number,
    definition: ProcessDefinition,
    incidents: Array<Incident>
}

export type Incident = {
    incidentType: string,
    incidentCount: number
}

export type ActivityInstanceStatistics = {
    id: string,
    instances: number,
    failedJobs: number,
    incidents: Array<Incident>
}
