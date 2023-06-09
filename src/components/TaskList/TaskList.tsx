import React, { useState } from 'react'
import Task from './Task/Task'
import { observer } from 'mobx-react'

import taskStore from '../../store/taskStore/taskStore'
import { ITask } from '../../store/taskStore/types'

import './TaskList.scss'

const TaskList: React.FC = observer(() => {
  const [currentDraggedTask, setCurrentDraggedTask] = useState<ITask | {}>({})

  // Comparing parts of the task names
  const filteredListByName: ITask[] = taskStore.tasks.filter((task) =>
    task.title.toLowerCase().includes(taskStore.filterQuery.title.toLowerCase())
  )

  // Comparing statuses of the tasks
  const filteredList: ITask[] = filteredListByName.filter((task) => {
    if (taskStore.filterQuery.status === 'done') {
      return task.isDone
    }
    if (taskStore.filterQuery.status === 'active') {
      return !task.isDone
    }
    return task
  })

  // Handler for setting current dragging task
  const handleDragStart = (task: ITask) => {
    setCurrentDraggedTask(task)
  }

  // Handler for task when stopped dragging
  const handleDragEnd: React.DragEventHandler = (
    event: React.DragEvent<HTMLLinkElement>
  ) => {
    ;(event.target as HTMLLIElement).classList.remove('task--over')
  }

  // Handler for tasks that dragged task is hovered over, painting it grey
  const handleDragOver = (
    event: React.DragEvent<HTMLLIElement>,
    order: number
  ) => {
    event.preventDefault()
    if (order !== currentDraggedTask) {
      ;(event.target as HTMLLIElement).classList.add('task--over')
    }
  }

  // Handler for removing the hovering color
  const handleDragLeave = (event: React.DragEvent<HTMLLIElement>) => {
    ;(event.target as HTMLLIElement).classList.remove('task--over')
  }

  // Drop drag function to change order in tasks
  const handleDropTask = (
    task: ITask,
    event: React.DragEvent<HTMLLIElement>
  ) => {
    ;(event.target as HTMLLIElement).classList.remove('task--over')
    taskStore.changeTasksOrder(currentDraggedTask, task)
  }

  //Sort by order property function
  const sortTaskByOrder = (a: ITask, b: ITask) => {
    if (a.orderNumber > b.orderNumber) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <ul className='task-list'>
      {filteredList.sort(sortTaskByOrder).map((task) => (
        <Task
          handleDragStart={() => handleDragStart(task)}
          handleDragEnd={handleDragEnd}
          handleDragOver={handleDragOver}
          handleDragLeave={handleDragLeave}
          handleDropTask={(event: React.DragEvent<HTMLLIElement>) =>
            handleDropTask(task, event)
          }
          key={task.id}
          id={task.id}
          order={task.orderNumber}
          title={task.title}
          isDone={task.isDone}
          doneTime={task.doneTime}
        />
      ))}
    </ul>
  )
})

export default TaskList
