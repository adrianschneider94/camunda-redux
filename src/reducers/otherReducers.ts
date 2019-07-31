import {createDefaultReducer, createMapReducer} from "./default"
import {Attachment, ProcessDefinition, ProcessDefinitionXML, TaskList, VariableInstance} from "../remoteTypes"

export const taskListMapReducer = createMapReducer(createDefaultReducer('TaskList'))
export const variableInstance = createMapReducer(createDefaultReducer('VariableInstance'))
export const attachments = createMapReducer(createDefaultReducer('Attachment'))
export const processDefinition = createMapReducer(createDefaultReducer('ProcessDefinition'))
export const processDefinitionXML = createMapReducer(createDefaultReducer('ProcessDefinitionXML'))