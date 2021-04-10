import React from 'react';
import User from "./User";

function UsersList({data}) {
    return (
        <>
            {data.map(item => (<User key={item.id} user={item}/>))}
        </>
    );
}

export default UsersList;