import { useState } from 'react'
import { MdCheck, MdDeleteForever } from 'react-icons/md'

const ToDoList = ({ content, checked, handleCheckButton, handleDeleteButton }) => {

  // const [isCheck, setIsCheck] = useState(0);

  // const handleCheckButton = () => {
  //   setIsCheck(!isCheck) 
  // }

  return (
    <li className='todo-item' >
      <span className={checked ? "checkList" : "notCheckList"} >
        {content}
      </span>
      <button className="check-btn" onClick={() => handleCheckButton(content) }>
        <MdCheck />
      </button>
      <button className='delete-btn' onClick={() => handleDeleteButton(content) } >
        <MdDeleteForever />
      </button>
    </li>
  )
}

export default ToDoList
