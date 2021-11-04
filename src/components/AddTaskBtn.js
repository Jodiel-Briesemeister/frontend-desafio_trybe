import React from 'react';

const { io } = require("socket.io-client");
const socket = io('http://localhost:3001');

function addTaskBtn({ task }) {

  const handleClick = () => {
    socket.emit('addTask', ( task ));
  }

  return (
    <button onClick={handleClick}>Adicionar</button>
  )
}

export default addTaskBtn;