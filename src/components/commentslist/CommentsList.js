import React from 'react';

function CommentsList(props) {
    return (
        <>
            <h3>postId: {props.postId} - name: {props.name} - email: {props.email}</h3>
            <h4>body: {props.body}</h4>
            <br/>
        </>
    );
}

export default CommentsList;