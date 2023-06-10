import React from 'react'
import { ReactComponent as CompleteIcon } from './images/complete-icon.svg'
import { ReactComponent as DeleteIcon } from './images/delete-icon.svg'

import taskStore from '../../../store/taskStore/taskStore'

import './Task.scss'

interface ITaskProps {
  id: string
  title: string
  isDone: boolean
  doneTime: Date | null
  order: number
  handleDragStart: () => void
  handleDragEnd: (event: React.DragEvent<HTMLLIElement>) => void
  handleDragOver: (event: React.DragEvent<HTMLLIElement>) => void
  handleDragLeave: (event: React.DragEvent<HTMLLIElement>) => void
  handleDropTask: (event: React.DragEvent<HTMLLIElement>) => void
}

const Task: React.FC<ITaskProps> = ({
  id,
  title,
  isDone,
  doneTime,
  handleDragStart,
  handleDragEnd,
  handleDragOver,
  handleDragLeave,
  handleDropTask,
}) => {
  // Function for parsing Date object
  const countCompletedDate = (time: Date) => {
    return (
      time.getDate() +
      '/' +
      (time.getMonth() + 1) +
      '/' +
      time.getFullYear() +
      ' ' +
      time.getHours() +
      ':' +
      time.getMinutes() +
      ':' +
      time.getSeconds()
    )
  }

  return (
    <li
      draggable
      onDragStart={() => handleDragStart()}
      onDragEnd={(event) => handleDragEnd(event)}
      onDragOver={(event) => handleDragOver(event)}
      onDragLeave={(event) => handleDragLeave(event)}
      onDrop={(event) => handleDropTask(event)}
      className={`task ${isDone ? 'task--completed' : ''}`}
    >
      <div className='task__text-wrapper'>
        <span className='task__text text-1'>{title}</span>
        <p className='task__time-completed label-1'>
          {doneTime !== null
            ? `completed on ${countCompletedDate(doneTime)}`
            : ''}
        </p>
      </div>

      <div className='task__controls'>
        <div className='task__complete-wrapper'>
          <input
            className='task__complete-checkbox'
            type='checkbox'
            checked={isDone}
            onChange={() => taskStore.toggleCompleteTask(id)}
          />
          <CompleteIcon className='task__completed-icon' />
        </div>
        <button
          onClick={() => taskStore.removeTask(id)}
          className='task__delete-button'
        >
          <DeleteIcon className='task__delete-icon' />
        </button>
      </div>
    </li>
  )
}

export default Task
