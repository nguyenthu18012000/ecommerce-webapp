import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AdminPage from './pages/admin';
import AdminLogin from './pages/admin/login';


const AdminComponent = ({match}) => {
    const admin = match?.url

    return (
        <Switch>
            <Route path={`${admin}/login`} exact component={AdminLogin} />
            <Route path={`${admin}`} component={AdminPage} />
        </Switch>
    );
};

export default AdminComponent;