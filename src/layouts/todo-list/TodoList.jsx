import PropTypes, { string } from 'prop-types'

const TodoList = ({ todos }) => {
  return (
    <div className='todo__list'>TodoList</div>
  )
}
TodoList.PropTypes = {
  todoname: PropTypes.string,
  isCompleted: PropTypes.bool,
  isEdited: PropTypes.bool,
  isEditing: PropTypes.bool,
  date: PropTypes.object,
  alarm: PropTypes.number
}
export default TodoList