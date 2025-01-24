import { useState } from 'react'

const ToDoForm = ({ onAddToDo }) => {
  const [inputValue, setInputValue] = useState("");
  
  const handleInputChange = (value) => {
    setInputValue(value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddToDo(inputValue)
    setInputValue("");
  }

  return (
    <section className='form'>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text" 
            className='todo-input'
            autoComplete='off'
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value) }
          />
        </div>
        <div>
          <button type='submit'>Add Task</button>
        </div>
      </form>
    </section>
  )
}

export default ToDoForm