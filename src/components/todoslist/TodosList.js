import React from 'react';
import Todo from "./Todo";

function TodosList({data}) {
    return (
        <>
            {data.map(item => (<Todo key={item.id} userId={item.userId} title={item.title} completed={item.completed}/>))}
        </>
    );
}

export default TodosList;