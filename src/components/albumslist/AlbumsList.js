import React from 'react';

function AlbumsList({data}) {
    return (
        <>
            {data.map(item => (<h3 key={item.id}>userId: {item.userId} - title: {item.title}</h3>))}
        </>
    );
}

export default AlbumsList;