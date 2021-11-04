import React from 'react';

function FilterSelect({ tasks, setTask, noFilter }) {

  const nameFilter = (array) => {
    array.sort(function(a, b) {
      if (a.task > b.task) {
        return 1;
      }
      if (a.task < b.task) {
        return -1;
      }
      return 0;
    })

    return array;
  }

  const dateFilter = (array) => {
    array.sort(function(a, b) {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      return 0;
    })

    return array;
  }

  const statusFilter = (array) => {
    array.sort(function(a, b) {
      if (a.status > b.status) {
        return 1;
      }
      if (a.status < b.status) {
        return -1;
      }
      return 0;
    })

    return array;
  }
  
  const setFilter = (value) => {
    let orderedTasks = [...tasks];

    switch(value) {
      case 'alfabética':
        orderedTasks = nameFilter(orderedTasks);
        break;
      case 'data':
        orderedTasks = dateFilter(orderedTasks);
        break;
      case 'status':
        orderedTasks = statusFilter(orderedTasks);
        break;
      default:
        orderedTasks = [...noFilter];
    }

    setTask(orderedTasks);
  }

  return (
    <select onChange={ (e) => setFilter(e.target.value)}>
      <option value="0">ordenar</option>
      <option value="alfabética">alfabética</option>
      <option value="data">data de criação</option>
      <option value="status">status</option>
    </select>
  )
}

export default FilterSelect;