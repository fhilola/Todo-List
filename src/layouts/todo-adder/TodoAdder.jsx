import './TodoAdder.scss'
import {FiPlus} from 'react-icons/fi'

const TodoAdder = () => {
  return (
    <div>
      <h1 className='adder__title'>Todo List</h1>
      <form className='adder__form'>
        <div className='input__wrapper'>
          <label htmlFor="adder-input">Task name</label>
          <input type="text" id='adder-input'/>
        </div>
          <button><FiPlus/>Create</button>
      </form>
    </div>
  )
}

export default TodoAdder