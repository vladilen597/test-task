import { observable } from 'mobx'
import { ITask, ITaskStore } from './types'

// Set initial state for typescript
const initialTasks: ITask[] = [
  {
    id: '0',
    orderNumber: 1,
    title: 'Buy a milk',
    isDone: false,
    doneTime: null,
  },
  {
    id: '1',
    orderNumber: 2,
    title: 'Buy a wine',
    isDone: true,
    doneTime: new Date(),
  },
]

const taskStore: ITaskStore = observable({
  tasks: initialTasks,
  filterQuery: { title: '', status: 'all' },

  addTask: function (taskName: string) {
    this.tasks.push({
      id: String(this.tasks.length),
      orderNumber: this.tasks.length + 1,
      title: taskName.trim(),
      isDone: false,
      doneTime: null,
    })
  },
  removeTask: function (id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  },
  toggleCompleteTask: function (id: string) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone
        if (task.isDone) {
          task.doneTime = new Date()
        } else {
          task.doneTime = null
        }
      }
      return task
    })
  },
  setFilterQuery: function (text: string) {
    this.filterQuery.title = text
  },
  changeFilterStatus: function (status: string) {
    this.filterQuery.status = status
  },
  clearFilterQuery: function () {
    this.filterQuery.title = ''
  },
  changeTasksOrder(firstTask: ITask, secondTask: ITask) {
    this.tasks = this.tasks.map((initialTask) => {
      if (initialTask.id === secondTask.id) {
        return { ...initialTask, orderNumber: firstTask.orderNumber }
      }
      if (initialTask.id === firstTask.id) {
        return { ...initialTask, orderNumber: secondTask.orderNumber }
      }
      return initialTask
    })
  },
})

export default taskStore
