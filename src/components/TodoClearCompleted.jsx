import React from 'react';
import PropTypes from 'prop-types';

TodoClearCompleted.propTypes = {
    clearCompleted: PropTypes.func.isRequired,
};

function TodoClearCompleted({clearCompleted}){
  return <button onClick={clearCompleted} className="button">Clear completed</button>;
};



export default TodoClearCompleted; 
