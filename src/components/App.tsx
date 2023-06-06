import React from 'react'
import Header from './Header/Header'
import CreateTaskForm from './CreateTaskForm/CreateTaskForm'
import TaskList from './TaskList/TaskList'
import FilterTasksForm from './FilterTasksForm/FilterTasksForm'
import EmptyPlaceholder from './Shared/EmptyPlaceholder/EmptyPlaceholder'

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
        <EmptyPlaceholder text='The list is empty! Try to add a new task' />
      )}
    </div>
  )
})

export default App
