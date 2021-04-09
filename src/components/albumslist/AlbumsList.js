import React from 'react';

function AlbumsList({userId, title}) {
    return (
        <h3>
            userId: {userId} - title: {title}
        </h3>
    );
}

export default AlbumsList;