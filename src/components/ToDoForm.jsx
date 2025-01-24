import { useState } from 'react'

const ToDoForm = ({ onAddToDo }) => {
  const [inputValue, setInputValue] = useState({});
  
  const handleInputChange = (value) => {
    setInputValue({id: value, content: value, checked: false});
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddToDo(inputValue)
    setInputValue({id:"", content:"" , checked: false});
  }

  return (
    <section className='form'>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text" 
            className='todo-input'
            autoComplete='off'
            value={inputValue.content}
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