import React from 'react';

function Todo({userId, title, completed}) {
    return (
        <h3>
            userId: {userId} - title: {title}{!!completed ? ' - completed' : ' - NOTcompleted'}
        </h3>
    );
}

export default Todo;