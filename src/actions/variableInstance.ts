import {createResource} from "../framework/fetch"

export const {fetch: fetchVariableInstances} = createResource<{ id: string }>(
    'VariableInstanceList',
    {
        url: args => "/variable-instance/",
        transformResult: (result, args) => ({id: args.id, variableInstances: result})
    }
)