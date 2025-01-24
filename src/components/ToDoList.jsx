import { useState } from 'react'
import { MdCheck, MdDeleteForever } from 'react-icons/md'

const ToDoList = ({ currTask, handleDeleteButton }) => {

  const [isCheck, setIsCheck] = useState(0);

  const handleCheckButton = () => {
    setIsCheck(!isCheck) 
  }

  return (
    <li className='todo-item' >
      <span className={isCheck ? "checkList" : "notCheckList"} >
        {currTask}
      </span>
      <button className="check-btn" onClick={() => handleCheckButton() }>
        <MdCheck />
      </button>
      <button className='delete-btn' onClick={() => handleDeleteButton(currTask) } >
        <MdDeleteForever />
      </button>
    </li>
  )
}

export default ToDoList
