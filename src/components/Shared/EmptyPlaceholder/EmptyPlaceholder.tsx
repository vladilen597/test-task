import React from 'react'

interface IEmptyPlacholderProps {
  text: string
}

const EmptyPlaceholder: React.FC<IEmptyPlacholderProps> = ({ text }) => {
  return <p className='app__empty-placeholder text-1'>{text}</p>
}

export default EmptyPlaceholder
