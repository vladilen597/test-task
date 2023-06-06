import React from 'react'
import { ReactComponent as CrossIcon } from './images/cross-icon.svg'
import SelectStatusFilter from './SelectStatusFilter/SelectStatusFilter'

import taskStore from '../../store/taskStore/taskStore'
import { observer } from 'mobx-react'

import './FilterTasksForm.scss'

const FilterTasksForm: React.FC = observer(() => {
  return (
    <form className='filter-tasks-form'>
      <label className='filter-tasks-form__label'>
        <span className='label-1'>Search for tasks</span>
        <div className='filter-tasks-form__input-select-wrapper'>
          <div className='filter-tasks-form__input-wrapper'>
            <input
              className='filter-tasks-form__input input-1'
              placeholder='Buy a bottle of juice'
              type='text'
              value={taskStore.filterQuery.title}
              onChange={(event) => taskStore.setFilterQuery(event.target.value)}
            />
            <button
              type='button'
              onClick={() => taskStore.clearFilterQuery()}
              className='filter-tasks-form__clear-button'
            >
              <CrossIcon className='filter-tasks-form__clear-icon' />
            </button>
          </div>

          <SelectStatusFilter />
        </div>
      </label>
    </form>
  )
})

export default FilterTasksForm
