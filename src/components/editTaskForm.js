import React from 'react';

const { io } = require("socket.io-client");
const socket = io('http://localhost:3001');

function EditTaskForm({ task, status, hidden, id, setHidden, setTask, setStatus }) {

  const handleClick = () => {
    setHidden(true);
    socket.emit('editTask', ({ task, status, id }));
  }

  return (
    <>
      <input
        hidden={hidden}
        type="text"
        value={task}
        placeholder="task"
        onChange={e => setTask(e.target.value)}
      />

      <select 
        hidden={hidden} 
        value={status} 
        onChange={ (e) => setStatus(e.target.value)}
      >
        <option value="pendente">pendente</option>
        <option value="em andamento">em andamento</option>
        <option value="pronto">pronto</option>
      </select>

      <button hidden={hidden} onClick={handleClick}>Salvar</button>

      <button hidden={hidden} onClick={ () => setHidden(true)}>Cancelar</button>
    </>
  )
}

export default EditTaskForm;



