import {Task, TaskList} from "../remoteTypes"

export interface mapType<T> {
    [key: string]: T
}

export interface camundaState {
    task: mapType<Task>
    taskList: mapType<TaskList>
}