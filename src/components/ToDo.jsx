import { useState, useEffect } from 'react'
import { MdCheck, MdDeleteForever } from 'react-icons/md'
import "./ToDo.css"
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import ToDoDateAndTime from './ToDoDate&Time';

const ToDo = () => {

  const [toDoList, setTodoList] = useState([]);

  const onAddToDo = ({id, content, checked}) => {
      if(content === "")
        return;

      if(!toDoList.find((currTask) => currTask.content === content ))
        setTodoList((prevToDoList) => [...prevToDoList, {id, content, checked}])
  }

  const handleCheckButton = (value) => {
    setTodoList(toDoList.map((currTask) => {
      if(currTask.content === value)
        return { ...currTask, checked: !currTask.checked }
      else
        return currTask;
    }))
  }

  const handleDeleteButton = (value) => {
    setTodoList(toDoList.filter((currTask) => currTask.content != value ))
  }

  const handleClearAllButton = () => {
    setTodoList([])
  }

  return (
    <section className="todo-container" >

      <header className='header'>
        <h1>ToDo List</h1>
        <ToDoDateAndTime />
      </header>

      <ToDoForm onAddToDo={onAddToDo} />

      <section className='myUnOrdList'>
        <ul>
          {
            toDoList.map((currTask) => {
              return (
                <ToDoList 
                  key={currTask.id}
                  content={currTask.content}
                  checked={currTask.checked}
                  handleCheckButton={handleCheckButton} 
                  handleDeleteButton={handleDeleteButton} 
                />
              )
            })
          }               
        </ul>
      </section>

      <section>
        <button className='clear-btn' onClick={() => handleClearAllButton() }>Clear All</button>
      </section>

    </section>
  )
}

export default ToDo