import {createResource} from "../framework/fetch"

const {fetch: fetchTask} = createResource<{ id: string }>(
    'Task',
    {url: args => "/task/" + args.id}
)

const {fetch: fetchTaskVariables} = createResource<{ id: string }>(
    'TaskVariables',
    {
        url: args => "/task/" + args.id + "/variables",
        transformResult: (result, args) => (
            {id: args.id, variables: result}
        )
    },
)

const {fetch: fetchTaskList} = createResource<{ id: string }>(
    'TaskList',
    {
        url: args => "/task/",
        transformResult: (result, args) => ({id: args.id, tasks: result})
    }
)

export {fetchTask, fetchTaskList, fetchTaskVariables}
