import {useState, useEffect } from 'react'

const EditTask = ({currentTask, setEditing, updateTask}) => {

    const [task, setTask] = useState(currentTask)

    useEffect(() => {
        setTask(currentTask)
      }, [currentTask])

    const handleInputChange = (event) => {
    const { text, value1 } = event.target
    const { day, value2 } = event.target
    const { reminder, value3 } = event.target

    setTask({ ...task, [text]: value1, [day]:value2, [reminder]:value3 })
    }

    return (
            <form className='add-form'  >
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={task.text} onChange={handleInputChange}></input>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' value={task.day} onChange={handleInputChange}></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={task.reminder} onChange={handleInputChange}></input>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'></input>
        </form>
    )
}

export default EditTask
