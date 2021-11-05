import React from 'react';
import PropTypes from 'prop-types';

function Task({ task, date, status }) {
  return (
    <li>
      {task}
      <br />
      {`Adicionada em: ${date}`}
      <br />
      {`Status: ${status}`}
    </li>
  );
}

Task.defaultProps = {
  task: '',
  status: '',
  date: '',
};

Task.propTypes = {
  task: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string,
};

export default Task;
