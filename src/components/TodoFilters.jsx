import React from 'react';
import PropTypes from 'prop-types';

TodoFilters.propTypes = {
  todosFiltered: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

function TodoFilters({ todosFiltered, filter, setFilter }) {
  return (
    <div>
      <button
        onClick={() => {
          setFilter('all');
          todosFiltered('all');
        }}
        className={`button filter-button 
      ${filter === 'all' ? 'filter-button-active' : ''}`}
      >
        All
      </button>
      <button
        onClick={() => {
          setFilter('active');
          todosFiltered('active');
        }}
        className={`button filter-button 
    ${filter === 'active' ? 'filter-button-active' : ''}`}
      >
        Active
      </button>
      <button
        onClick={() => {
          setFilter('completed');
          todosFiltered('completed');
        }}
        className={`button filter-button 
    ${filter === 'completed' ? 'filter-button-active' : ''}`}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilters;
