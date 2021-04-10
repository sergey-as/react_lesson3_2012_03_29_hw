import React from 'react';
import Photo from "./Photo";

function PhotosList({data}) {
    return (
        <>
            {data.map(item => (<Photo key={item.id} albumId={item.albumId} title={item.title} url={item.url} thumbnailUrl={item.thumbnailUrl}/>))}
        </>
    );
}

export default PhotosList;