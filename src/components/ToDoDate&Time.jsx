import { useEffect, useState } from 'react'

const ToDoDateAndTime = () => {

  const [dateAndTime, setDateAndTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();

      setDateAndTime(`${formattedDate}- ${formattedTime}`)
    }, 1000)

    return () => clearInterval(interval)
  }, [])


  return (
    <h2 className="date-time">
      {dateAndTime}
    </h2>
  )
}

export default ToDoDateAndTime