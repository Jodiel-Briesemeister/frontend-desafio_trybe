import React from 'react';
import PropTypes from 'prop-types';

const { io } = require('socket.io-client');

const socket = io('http://localhost:3001');

function RemoveTaskBtn({ id }) {
  const handleClick = () => {
    socket.emit('removeTask', (id));
  };

  return (
    <button type="button" onClick={ handleClick }>Remover</button>
  );
}

RemoveTaskBtn.defaultProps = {
  id: '',
};

RemoveTaskBtn.propTypes = {
  id: PropTypes.string,
};

export default RemoveTaskBtn;
