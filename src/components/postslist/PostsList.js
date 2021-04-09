import React from 'react';

function PostsList({userId, title, body}) {
    return (
        <>
            <h3>userId: {userId} - title: {title}</h3>
            <h4>body: {body}</h4>
            <br/>
        </>
    );
}

export default PostsList;