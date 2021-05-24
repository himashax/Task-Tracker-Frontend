import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowaddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
          id: 1,
          text: 'Doctors Appoinment',
          day: 'May 15th at 3.00 pm',
          reminder: true
      },
      {
          id: 2,
          text: 'Meeting at School',
          day: 'May 19th at 8.00 am',
          reminder: true
      },
      {
          id: 3,
          text: 'Grocery Shopping',
          day: 'May 14th at 6.00pm',
          reminder: false
      }
  ]
  )

  //const [taskObject] = useState('')

  //Delete Tasks
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id) )
  }
  
  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  //Add Tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    
    const newTask = {id, ...task}
    console.log(newTask)
    setTasks([...tasks, newTask])
  }

  const updateTask = (task) => {
    console.log('update', task.id)
    if(task.id !== null){
      setShowaddTask(true)
      //taskObject(task)
      return
    }
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowaddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} onUpdate={updateTask} /> 
      : 'No Tasks To Show'}
    </div>
  );
}

export default App;
