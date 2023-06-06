import React from 'react'

import taskStore from '../../../store/taskStore/taskStore'
import { observer } from 'mobx-react'

import './SelectStatusFilter.scss'

const SelectStatusFilter: React.FC = observer(() => {
  return (
    <select
      value={taskStore.filterQuery.status}
      onChange={(event) => taskStore.changeFilterStatus(event.target.value)}
      name='filter-list'
      className='select-status-filter text-1'
    >
      <option className='select-status-filter__select-option' value='all'>
        All
      </option>
      <option className='select-status-filter__select-option' value='done'>
        Completed
      </option>
      <option className='select-status-filter__select-option' value='active'>
        Active
      </option>
    </select>
  )
})

export default SelectStatusFilter
