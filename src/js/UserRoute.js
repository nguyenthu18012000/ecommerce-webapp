import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/user/login';
import Register from './pages/user/register';

const UserComponent = () => {
    return (
        <>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
        </>

    );
};

export default UserComponent;