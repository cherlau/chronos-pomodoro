import type { TaskModel } from "../../models/TaskModel"

 export enum TaskActionTypes {
	START_TASK = 'START_TASK',
	INTERRUP_TASK = 'INTERRUP_TASK'
 }

export type TaskActionModel = {
	type: TaskActionTypes.START_TASK, 
	payload: TaskModel
}