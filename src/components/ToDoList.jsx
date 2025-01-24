import { useState } from 'react'
import { MdCheck, MdDeleteForever } from 'react-icons/md'

const ToDoList = ({ currTask, handleDeleteButton }) => {

  return (
    <li className='todo-item' >
      <span>
        {currTask}
      </span>
      <button className="check-btn">
        <MdCheck />
      </button>
      <button className='delete-btn' onClick={() => handleDeleteButton(currTask) } >
        <MdDeleteForever />
      </button>
    </li>
  )
}

export default ToDoList
