import React from 'react';
import PropTypes from 'prop-types';

TodoCompleteAllTodos.propTypes = {
    completeAllTodos: PropTypes.func.isRequired,
};

function TodoCompleteAllTodos({completeAllTodos}){
    return (
        <div>
            <div onClick={completeAllTodos} className='button'>Check All</div>
        </div>
    );
}

export default TodoCompleteAllTodos;
