import {createResource} from "../framework/fetch"


export const {fetch: fetchAttachments} = createResource<{ id: string }>(
    'AttachmentList',
    {
        url: args => "/task/" + args.id + "/attachment/",
        transformResult: (result, args) => ({id: args.id, attachments: result})
    }
)

export const {fetch: fetchProcessDefinition} = createResource<{ id: string }>(
    'ProcessDefinition',
    {
        url: args => "/process-definition/" + args.id
    }
)

export const {fetch: fetchProcessDefinitionXML} = createResource<{ id: string }>(
    'ProcessDefinitionXML',
    {
        url: args => "/process-definition/" + args.id + '/xml'
    }
)