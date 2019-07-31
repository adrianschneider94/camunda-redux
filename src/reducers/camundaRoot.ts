import {FSAAuto} from "flux-standard-action"
import {combineReducers, Reducer} from "redux"
import {camundaState} from "../state"
import {taskMapReducer} from "./task"
import {taskListMapReducer} from "./otherReducers"

export const camundaRoot: Reducer<camundaState, FSAAuto<string, any, any>> = combineReducers<any, FSAAuto<string, any, any>>({
    task: taskMapReducer,
    taskList: taskListMapReducer,

})

