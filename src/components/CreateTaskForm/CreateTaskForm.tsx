import React, { useState } from 'react'
import { observer } from 'mobx-react'
import taskStore from '../../store/taskStore/taskStore'

import './CreateTaskForm.scss'

const CreateTaskForm: React.FC = observer(() => {
  const [taskName, setTaskName] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value)
  }

  const handleSubmitTask = (event: React.FormEvent) => {
    event.preventDefault()
    if (taskName.trim().length === 0) {
      alert('Please name your task')
      return
    }
    taskStore.addTask(taskName)
    setTaskName('')
  }

  return (
    <form className='create-task-form' onSubmit={handleSubmitTask}>
      <label className='create-task-form__label label-1'>
        <span className='create-task-form__name'>Create new task</span>
        <div className='create-task-form__input-wrapper'>
          <input
            className='create-task-form__input input-1'
            type='text'
            value={taskName}
            onChange={handleInputChange}
            placeholder='Buy a milk'
          />
          <button className='create-task-form__submit button-1'>ADD</button>
        </div>
      </label>
    </form>
  )
})

export default CreateTaskForm
