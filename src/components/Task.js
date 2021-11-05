import React from 'react';
import PropTypes from 'prop-types';

function Task({ task, date, status }) {
  return (
    <li>
      <h3>{task}</h3>
      {/* <br /> */}
      <p>{`Adicionada em: ${date}`}</p>
      {/* <br /> */}
      <p>{`Status: ${status}`}</p>
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
