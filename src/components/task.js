import React, { useEffect, useState } from 'react';
const { io } = require("socket.io-client");
const socket = io('http://localhost:3001');

function Task({id, task}) {
  const [taskDescription, setTask] = useState(task);

  useEffect(() => {

    socket.on('update', (data) => {
      if (id === data._id) setTask(data.price);
    })
  }, [id]);

  return (
    <>
      <li key={id}>
        {taskDescription}
      </li>
    </>
  )
}

export default Task;