import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SideBar from './components/admin/sidebar';
import AdminPage from './pages/admin';
import AdminLogin from './pages/admin/login';
import AddProduct from './pages/admin/productManage/addProduct';


const AdminComponent = ({match}) => {
    const admin = match?.url

    return (
        <>
            <Route path={`${admin}`} exact component={SideBar} />
            <Route path={`${admin}/login`} exact component={AdminLogin} />
        </>
    );
};

export default AdminComponent;