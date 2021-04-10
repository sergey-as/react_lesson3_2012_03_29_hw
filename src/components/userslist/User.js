import React from 'react';

function User({user}) {
    return (
        <div>
            <h3>{user.name}</h3>
            <h4>email: {user.email}</h4>
            {/*<h4>street: {user.address.street} - suite: {user.address.suite} - city: {user.address.city} - zipcode: {user.address.zipcode} - geo: {user.address.geo}</h4>*/}
        </div>
    );
}

export default User;