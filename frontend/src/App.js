import React, { useState } from 'react';
import './App.css';
import TaskForm from '../src/components/TaskForm';
import TaskList from '../src/components/TaskList';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:4500/api/tasks');
    setTasks(response.data);
  };

  return (
    <div>
      <h1>Task Management Application</h1>
      <h5>Adnan Akhtar Pesto Tech Asessment</h5>

      <TaskForm fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
}

export default App;
