import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/user/login';
import Register from './pages/user/register';
import Product from './pages/user/product';
import Home from './pages/user/home';

const UserComponent = () => {
    return (
        <>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/product" exact component={Product} />
            <Route path="/" exact component={Home} />
        </>
    );
};

export default UserComponent;