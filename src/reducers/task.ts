import {Task, TaskVariables} from "../remoteTypes"
import {createDefaultReducer, createMapReducer} from "./default"
import reduceReducers from "reduce-reducers"

const taskReducer = reduceReducers(
    createMapReducer(createDefaultReducer('Task')),
    createMapReducer(createDefaultReducer('TaskVariables'))
)

export const taskMapReducer = taskReducer