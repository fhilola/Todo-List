import React from 'react'
import TodoAdder from '../todo-adder/TodoAdder'
import TodoList from '../todo-list/todoList'

const TodoContainer = () => {
  return (
    <div className='todo__container'>
        <TodoAdder/>
        <TodoList/>
    </div>
  )
}

export default TodoContainer