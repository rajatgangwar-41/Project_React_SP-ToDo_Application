import { useState, useEffect } from 'react'
import { MdCheck, MdDeleteForever } from 'react-icons/md'
import "./ToDo.css"
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import ToDoDateAndTime from './ToDoDate&Time';

const ToDo = () => {

  const [toDoList, setTodoList] = useState([]);

  const onAddToDo = (inputValue) => {
      if(inputValue === "" || toDoList.includes(inputValue)) 
        return;
      
      setTodoList((prevToDoList) => [...prevToDoList, inputValue] )
  }

  const handleDeleteButton = (value) => {
    setTodoList(toDoList.filter((currTask) => currTask != value ))
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
            toDoList.map((currTask, index) => {
              return (
                <ToDoList 
                  key={index}
                  currTask={currTask}
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