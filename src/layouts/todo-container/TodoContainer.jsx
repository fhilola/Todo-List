import './TodoContainer.scss'
import TodoAdder from '../todo-adder/TodoAdder'
import TodoList from '../todo-list/todoList'
import { useState } from 'react'

const TodoContainer = () => {
  const [todos, setTodos] = useState([])
  console.log(todos);
  return (
    <div className='todo__container'>
        <TodoAdder todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos}/>
    </div>
  )
}

export default TodoContainer