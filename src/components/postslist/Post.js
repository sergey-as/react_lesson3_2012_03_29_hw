import React from 'react';

function Post({userId, title, body}) {
    // console.log('post');
    return (
        <>
            <h3>userId: {userId} - title: {title}</h3>
            <h4>body: {body}</h4>
            <br/>
        </>
    );
}

export default Post;