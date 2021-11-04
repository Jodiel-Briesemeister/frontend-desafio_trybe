import React, { useEffect, useState } from 'react';
import Task from '../components/Task';
import AddTaskBtn from '../components/AddTaskBtn';
import RemoveTaskBtn from '../components/RemoveTaskBtn';
import FilterSelect from '../components/FilterSelect';
import EditTaskForm from '../components/editTaskForm';
const { io } = require("socket.io-client");
const socket = io('http://localhost:3001');

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTask] = useState([]);
  const [noFilterTasks, setNoFilterTasks] = useState([]);
  const [taskInput, setTaskInput] = useState([""]);

  const [hiddenEditForm, setHiddenEditForm] = useState(true);
  const [taskValue, setTaskValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [taskId, setTaskId] = useState("");

  const editTask = (task, status, id) => {
    setTaskValue(task);
    setStatusValue(status);
    setTaskId(id);
    setHiddenEditForm(false);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(data => {
        setTask(data);
        setNoFilterTasks(data);
        setIsLoading(false);
      });

    socket.on('update', (data) => {
      setTask(data)
      setNoFilterTasks(data);
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
      <FilterSelect tasks={tasks} setTask={setTask} noFilter={noFilterTasks}/>

      <br/><br/>
      
      <EditTaskForm
        hidden={hiddenEditForm} 
        id={taskId} 
        task={taskValue} 
        status={statusValue}
        setHidden={setHiddenEditForm}
        setTask = {setTaskValue}
        setStatus = {setStatusValue}
      />

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
                  <button onClick={ () => editTask(task, status, _id)}>Editar</button>
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