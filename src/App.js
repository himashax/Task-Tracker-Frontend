import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import axios from 'axios'

function App() {

  const [showAddTask, setShowaddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getTasks() 
  }, [])

  const getTasks = () => {
    axios.get('/myapp/')
     .then(response => {
        console.log(response.data)
        const data = response.data
        setTasks(data)
    }).catch(error => {
        console.log(error);
    })
  }

  //Delete Tasks
  const deleteTask = (id) => {
    console.log('delete', id)

    axios.delete(`http://127.0.0.1:8000/myapp/delete/${id}`)  
    .then(res => {  
      console.log(res);  
      console.log(res.data);  

    setTasks(tasks.filter((task) => task.id !== id) )
    })
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
    axios
      .post('/myapp/add/', task)
      .then(res => {
        setTasks([...tasks, res.data])
        console.log('post method', res.data)
      })
   // setTasks([...tasks, newTask])

    // const id = Math.floor(Math.random() * 1000) + 1
    
    // const newTask = {id, ...task}
  }


  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, text: '', day: '', reminder:false }
  const [currentTask, setCurrentTask] = useState(initialFormState)

  const editRow = (task) => {
    setEditing(true)
    
    console.log(task)
    setCurrentTask({ id: task.id, text: task.text, day: task.day, reminder: task.reminder })
  }
  const updateTask = (id, updatedTask) => {
    setEditing(false)
  
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowaddTask(!showAddTask)} showAddTask={showAddTask} />    
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} onUpdate={editRow} /> 
      : 'No Tasks To Show'}

{/* {editing ? <EditTask currentTask={currentTask} setEditing={setEditing} updateTask={updateTask} /> : showAddTask && <AddTask onAdd={addTask} /> } */}

    </div>
  );
}

export default App;
