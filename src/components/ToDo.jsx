import { useState } from 'react'
import { MdCheck, MdDeleteForever } from 'react-icons/md'
import "./ToDo.css"

const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setTodoList] = useState([]);

  const handleOnChange = (value) => {
    setInputValue(value);
  }

  const handleOnFormSubmit = (event) => {
      event.preventDefault();

      if(inputValue === "") 
        return;
      
      if(toDoList.includes(inputValue)){
        setInputValue("")
        return;
      }

      setTodoList((prevToDoList) => {
        return  [...prevToDoList, inputValue];
      })

      setInputValue("");
  }

  return (
    <section className="todo-container">
      <header className='header'>
        <h1>ToDo List</h1>
      </header>
      <section className='form'>
        <form onSubmit={handleOnFormSubmit}>
        <div>
          <input
            type="text" 
            className='todo-input'
            autoComplete='off'
            value={inputValue}
            onChange={(e) => handleOnChange(e.target.value) }
          />
        </div>
        <div>
          <button type='submit'>Add Task</button>
        </div>
        </form>
      </section>
      <section className='myUnOrdList'>
        <ul>
          {
            toDoList.map((currTask, index) => {
              return (
                <li 
                  key={index}
                  className='todo-item'
                >
                  <span>{currTask}</span>
                  <button className='check-btn'>
                    <MdCheck />
                  </button>
                  <button className='delete-btn'>
                    <MdDeleteForever />
                  </button>
                </li>
              )
            })
          }
        </ul>
      </section>
    </section>
  )
}

export default ToDo