import React from 'react';

function Task({id, task, date, status}) {
  return (
    <>
      <li>
        {task}
        <br/>Adicionada em: {date}
        <br/> Status: {status}
      </li>
    </>
  )
}

export default Task;