import './TodoItem.scss'
import { formatDate } from "../../helpers/formatDate"

const TodoItem = ({ todoname, isCompleted, isEdited, isEditing, alarm, date }) => {
    const {hours, minutes} = formatDate(date)
    return (
        <div className='todo__item'>
            <div className='title__wrapper'>
                <h3 className="item-name">{todoname}</h3>
            <p className="item-date">{hours}:{minutes}</p>
            </div>
            <div className='button__wrapper'>
                <button>Complete</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem