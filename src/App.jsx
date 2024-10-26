import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

// possible to integrate a backend in?
// use interfaces and types to define the shape of the data and props e.g. for ToDoList, ToDoItem, etc.
export default function App() {

  // good choice to pass down the state and the functions to update the state as props to the child components
  const [todos, setTodos] = useState([])

  function addTodo (title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        // id is better to be saved using the relevant database library e.g. mongo, which will generate a unique id for each todo (using randomUUID does not ensure that the id is unique)
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          // should be !completed to toggle the value of completed
          return { ...todo, completed}
        }
        // might want to handle the case where the id is not found
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">To-Do List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}
