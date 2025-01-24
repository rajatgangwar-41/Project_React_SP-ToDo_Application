const TODO_KEY = "ToDo_React_Project";

// Get Data from Local Storage
const getLocalStorageToDoData = () =>  {
  const localData = localStorage.getItem(TODO_KEY);

  return !localData ? []: JSON.parse(localData);
}

// Set Data on Local Storage
const setLocalStorageToDoData = (ToDoList) =>  {
  return localStorage.setItem(TODO_KEY, JSON.stringify(ToDoList));
}

export {getLocalStorageToDoData, setLocalStorageToDoData}