import React, { useEffect, useState } from 'react';
import Task from '../components/task';

function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [tasks, setTask] = useState([])

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(data => {
        setTask(data);
        setIsLoading(false);
      });

  }, []);

  return (
    <div>
      Tarefas
      <input type="text" placeholder="Adicionar nova tarefa" />
      <button>Adicionar</button>
      { isLoading ? <p>Carregando...</p> 
        : (
          <ul>
          {
            tasks.map((t) => {
              return (
                <Task id={t._id} task={t.description} />
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