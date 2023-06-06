export interface ITask {
  id: string
  title: string
  isDone: boolean
  doneTime: Date | null
  orderNumber: number
}

export interface ITaskStore {
  tasks: ITask[]
  filterQuery: { title: string; status: string }
  addTask: Function
  removeTask: Function
  toggleCompleteTask: Function
  setFilterQuery: Function
  changeFilterStatus: Function
  clearFilterQuery: Function
  changeTasksOrder: Function
}
