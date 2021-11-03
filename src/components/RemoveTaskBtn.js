import React from 'react';

const { io } = require("socket.io-client");
const socket = io('http://localhost:3001');

function RemoveTaskBtn({ id }) {
  const handleClick = () => {
    socket.emit('removeTask', (id));
  }

  return (
    <button onClick={handleClick}>Remover</button>
  )
}

export default RemoveTaskBtn;