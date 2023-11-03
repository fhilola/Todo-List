import './Todolist.scss'
import PropTypes from 'prop-types'
import TodoItem from '../../components/todo-item/TodoItem'


const TodoList = ({ todos }) => {
  return (
    <div className='todo__list'>
      {
        todos.map(({id, todoname, isCompleted, isEdited, isEditing, alarm, date})=>
        <TodoItem 
        key={id}
        todoname={todoname}
        isCompleted={isCompleted}
        isEdited={isEdited}
        isEditing={isEditing}
        date={date}
        alarm={alarm}
        />
        )
      }
    </div>
  )
}
TodoList.propTypes = {
  id: PropTypes.string,
  todoname: PropTypes.string,
  isCompleted: PropTypes.bool,
  isEdited: PropTypes.bool,
  isEditing: PropTypes.bool,
  date: PropTypes.object,
  alarm: PropTypes.number
}
export default TodoList