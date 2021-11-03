import React, { useEffect, useState } from 'react';
import Task from '../components/task';
import AddTaskBtn from '../components/addTaskBtn';
import RemoveTaskBtn from '../components/RemoveTaskBtn';
const { io } = require("socket.io-client");
const socket = io('http://localhost:3001');

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTask] = useState([]);
  const [taskInput, setTaskInput] = useState([""]);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(data => {
        setTask(data);
        setIsLoading(false);
      });

    socket.on('update', (data) => {
      setTask(data)
    })
  }, []);

  return (
    <div>
      Tarefas
      <input
        type="text" 
        placeholder="Adicionar nova tarefa" 
        onChange={e => setTaskInput(e.target.value)} 
      />
      <AddTaskBtn task={taskInput} />
      { isLoading ? <p>Carregando...</p>
        : (
          <ul>
          {
            tasks.map((t) => {
              const { _id, task, date, status } = t;
              return (
                <div key={_id}>
                  <Task id={_id} task={task} date={date} status={status}/>
                  <RemoveTaskBtn id={_id} />
                </div>
              )
            })
          }
          </ul>
        )
      }
    </div>    
  );
}

export default Home;