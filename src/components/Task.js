import {FaEdit, FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle, onUpdate}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''} `} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.task} <FaTimes style={{color:'red', cursor:'pointer' }} onClick= {() => onDelete(task.id)} /> </h3>
            <p> {task.day}  <FaEdit onClick={() => onUpdate(task)} /> </p>
        </div>
    )
}

export default Task
