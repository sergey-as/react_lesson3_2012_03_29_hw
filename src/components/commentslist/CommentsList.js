import React from 'react';
import Comment from "./Comment";

function CommentsList({data}) {

    return (
        <>
            {data.map(item => (<Comment key={item.id} postId={item.postId} name={item.name} email={item.email} body={item.body}/>))}
        </>
    );
}

export default CommentsList;