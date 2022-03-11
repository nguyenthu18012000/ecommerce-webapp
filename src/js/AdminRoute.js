import React from 'react';
import { Route } from 'react-router-dom';
import AdminLogin from './pages/admin/login';

const AdminComponent = () => {
    return (
        <>
            <Route path="/login" exact component={AdminLogin} />
        </>
    );
};

export default AdminComponent;