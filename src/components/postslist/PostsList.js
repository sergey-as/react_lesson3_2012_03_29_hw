import React from 'react';
import Post from "./Post";

function PostsList({data}) {

    return (
        <>
            {data.map(item => (<Post key={item.id} userId={item.userId} title={item.title} body={item.body}/>))}
        </>
    );
}

export default PostsList;