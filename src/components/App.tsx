import React from 'react'
import Header from './Header/Header'
import CreateTaskForm from './CreateTaskForm/CreateTaskForm'
import TaskList from './TaskList/TaskList'
import FilterTasksForm from './FilterTasksForm/FilterTasksForm'

import '../utils/styles/colors.scss'
import '../utils/styles/classes.scss'
import './App.scss'

import taskStore from '../store/taskStore/taskStore'
import { observer } from 'mobx-react'

const App: React.FC = observer(() => {
  return (
    <div className='app'>
      <Header />
      <hr className='app__splitter' />
      <CreateTaskForm />
      <FilterTasksForm />
      {taskStore.tasks.length ? (
        <TaskList />
      ) : (
        <p className='app__empty-placeholder text-1'>
          The list is empty! Try to add a new task
        </p>
      )}
    </div>
  )
})

export default App
