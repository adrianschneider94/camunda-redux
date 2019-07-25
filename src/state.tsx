export type apiType = {
    optimistic: boolean,
    fetchError: boolean,
    isFetching: boolean,
    cacheUntil: number,
}

export type state = {
    task: taskDict,
    taskLists: WeakMap<object, taskList & apiType>,
    variables: {
        [taskId: string]: variables & apiType
    },
    forms: {
        [taskId: string]: form & apiType
    },
    startForms: {
        [processDefinitionId: string]: form & apiType
    },
    processDefinitions: {
        [processDefinitionId: string]: processDefinition & apiType
    },
    processXMLs: {
        [processDefinitionId: string]: processXML & apiType
    },
    processInstanceStatistics: {
        [processDefinitionId: string]: processInstanceStatistics & apiType
    },
    activityInstanceStatistics: {
        [processDefinitionId: string]: activityInstanceStatistics & apiType
    }
}



export type task = {
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

export type taskDict = {
    [taskId: string]: task & apiType
}

export type variable = {
    value: string | number | boolean | object,
    type: string,
    valueInfo: object
}

export type variables = {
    [variableId: string]: variable
}

export type form = {
    key: string,
    contextPath: string
}

export type taskList = {
    tasks: Array<string>
}

export type processDefinition = {
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

export type processXML = {
    id?: string
    bpmn20Xml: string
}

export type processInstanceStatistics = {
    id: string,
    instances: number,
    failedJobs: number,
    definition: processDefinition,
    incidents: Array<incident>
}

export type incident = {
    incidentType: string,
    incidentCount: number
}

export type activityInstanceStatistics = {
    id: string,
    instances: number,
    failedJobs: number,
    incidents: Array<incident>
}
