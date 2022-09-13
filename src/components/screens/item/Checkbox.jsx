import React from 'react'
import {BsCheck2Circle} from 'react-icons/bs';

const Checkbox = ({isCompleted}) => {
  return (
    <div className={`border-2 rounded-lg border-blue-800 ${isCompleted ? 'bg-blue-700' : "" } w-7 h-7 mr-3 flex items-center justify-center`}>
        {isCompleted && 
        <BsCheck2Circle size={24} 
        className='text-gray-900' />}
        
    </div>
  )
}

export default Checkbox;