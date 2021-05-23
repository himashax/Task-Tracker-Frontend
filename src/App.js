import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {

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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
