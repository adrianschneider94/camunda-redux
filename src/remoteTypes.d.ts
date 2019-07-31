export interface ProcessDefinition {
    id: string;
    key: string;
    category: string | null;
    description: string | null;
    name: string | null;
    version: number;
    resource: string | null;
    deploymentId: string;
    diagram: string | null;
    suspended: boolean;
    tenantId: string | null;
    versionTag: string | null;
    historyTimeToLive: number;

    [k: string]: any;
}

export type CandidateGroupCount = {
    groupName: string;
    taskCount: number;
}[];

export interface Attachment {
    id: string;
    name: string;
    taskId: string;
    description: string;
    type: string;
    url: string;

    [k: string]: any;
}

export interface ProcessDefinitionXML {
    id: string;
    bpmn20Xml: string;

    [k: string]: any;
}

export interface Count {
    count: number;
}

export interface Comment {
    id: string;
    userId: string;
    taskId: string;
    time: string;
    message: string;

    [k: string]: any;
}

export interface FormKey {
    key: string;
    contextPath: string;
}

export interface IdentityLink {
    userId: string;
    groupId: string;
    type: string;

    [k: string]: any;
}

export interface Task {
    id?: string;
    name?: string;
    assignee?: string | null;
    created?: string | null;
    due?: string | null;
    followUp?: string | null;
    delegationState?: string | null;
    description?: string | null;
    executionId?: string | null;
    owner?: string | null;
    parentTaskId?: string | null;
    priority?: number;
    processDefinitionId?: string | null;
    processInstanceId?: string | null;
    taskDefinitionKey?: string | null;
    caseExecutionId?: string | null;
    caseInstanceId?: string | null;
    caseDefinitionId?: string | null;
    suspended?: boolean;
    formKey?: string | null;
    tenantId?: string | null;

    [k: string]: any;
}

export interface TaskVariables {
    id?: string;
    variables?: {
        [k: string]: any;
    };

    [k: string]: any;
}

export interface VariableInstance {
    id?: string;
    name?: string;
    type?: string;
    value?:
        | string
        | number
        | boolean
        | {
        [k: string]: any;
    };
    valueInfo?: {
        [k: string]: any;
    };
    processInstanceId?: string | null;
    executionId?: string | null;
    caseInstanceId?: string | null;
    caseExecutionId?: string | null;
    taskId?: string | null;
    activityInstanceId?: string;
    errorMessage?: string | null;
    tenantId?: string | null;

    [k: string]: any;
}

export interface AttachmentList {
    id?: string;
    attachments?: Attachment[];

    [k: string]: any;
}

export interface Attachment {
    id: string;
    name: string;
    taskId: string;
    description: string;
    type: string;
    url: string;

    [k: string]: any;
}

export type CommentList = Comment[];

export interface Comment {
    id: string;
    userId: string;
    taskId: string;
    time: string;
    message: string;

    [k: string]: any;
}

export interface VariableInstanceList {
    id?: string;
    variableInstances?: VariableInstance[];

    [k: string]: any;
}

export interface VariableInstance {
    id?: string;
    name?: string;
    type?: string;
    value?:
        | string
        | number
        | boolean
        | {
        [k: string]: any;
    };
    valueInfo?: {
        [k: string]: any;
    };
    processInstanceId?: string | null;
    executionId?: string | null;
    caseInstanceId?: string | null;
    caseExecutionId?: string | null;
    taskId?: string | null;
    activityInstanceId?: string;
    errorMessage?: string | null;
    tenantId?: string | null;

    [k: string]: any;
}
export type IdentityLinkList = IdentityLink[];

export interface IdentityLink {
    userId: string;
    groupId: string;
    type: string;

    [k: string]: any;
}

export interface TaskList {
    id?: string;
    tasks?: Task[];

    [k: string]: any;
}

export interface Task {
    id?: string;
    name?: string;
    assignee?: string | null;
    created?: string | null;
    due?: string | null;
    followUp?: string | null;
    delegationState?: string | null;
    description?: string | null;
    executionId?: string | null;
    owner?: string | null;
    parentTaskId?: string | null;
    priority?: number;
    processDefinitionId?: string | null;
    processInstanceId?: string | null;
    taskDefinitionKey?: string | null;
    caseExecutionId?: string | null;
    caseInstanceId?: string | null;
    caseDefinitionId?: string | null;
    suspended?: boolean;
    formKey?: string | null;
    tenantId?: string | null;

    [k: string]: any;
}
