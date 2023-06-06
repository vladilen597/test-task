import React from 'react'
import { ReactComponent as CompleteIcon } from './images/complete-icon.svg'
import { ReactComponent as TaskList } from './images/list-icon.svg'

import taskStore from '../../store/taskStore/taskStore'
import { observer } from 'mobx-react'

import './Header.scss'

const Header: React.FC = observer(() => {
  return (
    <header className='header'>
      <span className='header__text-wrapper'>
        <h1 className='header__title h1-title'>TaskManager</h1>
        <span className='header__drag-description label-2'>
          You can also drag 'n' drop tasks!
        </span>
      </span>
      <div className='header__task-counter'>
        <TaskList className='header__icon' title='Amount of all tasks' />
        <span className='text-1'>
          {taskStore.tasks.length} /{' '}
          {taskStore.tasks.filter((task) => task.isDone === true).length}
        </span>
        <CompleteIcon className='header__icon' title='Completed tasks' />
      </div>
    </header>
  )
})

export default Header
