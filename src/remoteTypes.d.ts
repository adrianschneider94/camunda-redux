export type VariableInstance = {
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
export type ProcessDefinitionXML = {
    id: string;
    bpmn20Xml: string;
    [k: string]: any;
}
export type Attachment = {
    id: string;
    name: string;
    taskId: string;
    description: string;
    type: string;
    url: string;
    [k: string]: any;
}
export type CandidateGroupCount = {
    groupName: string;
    taskCount: number;
}[];
export type Comment = {
    id: string;
    userId: string;
    taskId: string;
    time: string;
    message: string;
    [k: string]: any;
}
export type Count = {
    count: number;
}
export type FormKey = {
    key: string;
    contextPath: string;
}
export type IdentityLink = {
    userId: string;
    groupId: string;
    type: string;
    [k: string]: any;
}
export type Task = {
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
export type Variable = {
    value:
        | {
        [k: string]: any;
    }
        | string
        | number
        | boolean;
    type: string;
    valueInfo: {
        objectTypeName: string;
        serializationDataFormat: string;
    };
}
export type ProcessDefinition = {
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
export type VariableInstanceList = {
    id?: string;
    variableInstances?: VariableInstance[];
    [k: string]: any;
}
export type VariableInstance = {
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
export type All = {
    task?: {
        Attachment?: {
            id: string;
            name: string;
            taskId: string;
            description: string;
            type: string;
            url: string;
            [k: string]: any;
        };
        AttachmentList?: {
            id?: string;
            attachments?: {
                id: string;
                name: string;
                taskId: string;
                description: string;
                type: string;
                url: string;
                [k: string]: any;
            }[];
            [k: string]: any;
        };
        CandidateGroupCount?: {
            groupName: string;
            taskCount: number;
        }[];
        Comment?: {
            id: string;
            userId: string;
            taskId: string;
            time: string;
            message: string;
            [k: string]: any;
        };
        CommentList?: {
            id: string;
            userId: string;
            taskId: string;
            time: string;
            message: string;
            [k: string]: any;
        }[];
        Count?: {
            count: number;
        };
        FormKey?: {
            key: string;
            contextPath: string;
        };
        IdentityLink?: {
            userId: string;
            groupId: string;
            type: string;
            [k: string]: any;
        };
        IdentityLinkList?: {
            userId: string;
            groupId: string;
            type: string;
            [k: string]: any;
        }[];
        Task?: {
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
        };
        TaskList?: {
            id?: string;
            tasks?: {
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
            }[];
            [k: string]: any;
        };
        Variable?: {
            value:
                | {
                [k: string]: any;
            }
                | string
                | number
                | boolean;
            type: string;
            valueInfo: {
                objectTypeName: string;
                serializationDataFormat: string;
            };
        };
        VariableMap?: {
            [k: string]: {
                value:
                    | {
                    [k: string]: any;
                }
                    | string
                    | number
                    | boolean;
                type: string;
                valueInfo: {
                    objectTypeName: string;
                    serializationDataFormat: string;
                };
            };
        };
        [k: string]: any;
    };
    "process-definition"?: {
        ProcessDefinition?: {
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
        };
        ProcessDefinitionXML?: {
            id: string;
            bpmn20Xml: string;
            [k: string]: any;
        };
        [k: string]: any;
    };
    VariableInstance?: VariableInstance;
    VariableInstanceList?: {
        id?: string;
        variableInstances?: VariableInstance[];
        [k: string]: any;
    };
    [k: string]: any;
}
export type VariableInstance = {
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
export type AttachmentList = {
    id?: string;
    attachments?: Attachment[];
    [k: string]: any;
}
export type Attachment = {
    id: string;
    name: string;
    taskId: string;
    description: string;
    type: string;
    url: string;
    [k: string]: any;
}
export type CommentList = Comment[];

export type Comment = {
    id: string;
    userId: string;
    taskId: string;
    time: string;
    message: string;
    [k: string]: any;
}
export type IdentityLinkList = IdentityLink[];

export type IdentityLink = {
    userId: string;
    groupId: string;
    type: string;
    [k: string]: any;
}
export type TaskList = {
    id?: string;
    tasks?: Task[];
    [k: string]: any;
}
export type Task = {
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
export type VariableMap = {
    [k: string]: {
        value?:
            | {
            [k: string]: any;
        }
            | string
            | number
            | boolean;
        type?: string;
        valueInfo?: {
            objectTypeName: string;
            serializationDataFormat: string;
        };
        [k: string]: any;
    };
}
