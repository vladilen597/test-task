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
  addTask: (taskName: string) => void
  removeTask: (id: string) => void
  toggleCompleteTask: (id: string) => void
  setFilterQuery: (id: string) => void
  changeFilterStatus: (status: string) => void
  clearFilterQuery: () => void
  changeTasksOrder: (firstTask: ITask, secondTask: ITask) => void
}
