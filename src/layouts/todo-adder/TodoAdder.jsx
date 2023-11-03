import { useState } from 'react'
import './TodoAdder.scss'
import {FiPlus} from 'react-icons/fi'
import PropTypes from 'prop-types';
import useRandomId from '../../hooks/useRandomId';

const TodoAdder = ({todos, setTodos}) => {
  const [todoname, setTodoname] = useState("")
  const id = useRandomId()

  function createTodo(e){
    e.preventDefault()
    const todo = {
      id: id,
      todoname: todoname,
      isCompleted: false,
      isEdited: false,
      isEditing: false,
      date: new Date(),
      alarm: new Date().getTime() + 200000
    }
    setTodos([...todos, todo])
  }
  return (
    <div>
      <h1 className='adder__title'>Todo List</h1>
      <form className='adder__form' onSubmit={createTodo}>
        <div className='input__wrapper'>
          <label htmlFor="adder-input">Task name</label>
          <input type="text" id='adder-input' onChange={e=>setTodoname(e.target.value.trim())}/>
        </div>
          <button><FiPlus/>Create</button>
      </form>
    </div>
  )
}
TodoAdder.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired
}
export default TodoAdder