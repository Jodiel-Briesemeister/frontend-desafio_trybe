import React from 'react';
import PropTypes from 'prop-types';

function FilterSelect({ tasks, setTask, noFilter }) {
  const nameFilter = (array) => {
    array.sort((a, b) => {
      if (a.task > b.task) {
        return 1;
      }
      if (a.task < b.task) {
        const previousValue = -1;
        return previousValue;
      }
      return 0;
    });

    return array;
  };

  const dateFilter = (array) => {
    array.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        const previousValue = -1;
        return previousValue;
      }
      return 0;
    });

    return array;
  };

  const statusFilter = (array) => {
    array.sort((a, b) => {
      if (a.status > b.status) {
        return 1;
      }
      if (a.status < b.status) {
        const previousValue = -1;
        return previousValue;
      }
      return 0;
    });

    return array;
  };

  const setFilter = (value) => {
    let orderedTasks = [...tasks];

    switch (value) {
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
  };

  return (
    <select onChange={ (e) => setFilter(e.target.value) }>
      <option value="ordenar">ordenar</option>
      <option value="alfabética">alfabética</option>
      <option value="data">data de criação</option>
      <option value="status">status</option>
    </select>
  );
}

FilterSelect.defaultProps = {
  tasks: [],
  setTask: '',
  noFilter: [],
};

FilterSelect.propTypes = {
  tasks: PropTypes.arrayOf(Object),
  setTask: PropTypes.func,
  noFilter: PropTypes.arrayOf(Object),
};

export default FilterSelect;
