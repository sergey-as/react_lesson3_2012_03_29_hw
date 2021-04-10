import React from 'react';

function Photo(props) {
    return (
        <>
            <h4>albumId: {props.albumId} - title: {props.title} - email: {props.email}</h4>
            <h5>url: {props.url}</h5>
            <h5>thumbnailUrl: {props.thumbnailUrl}</h5>
            <br/>
        </>
    );
}

export default Photo;