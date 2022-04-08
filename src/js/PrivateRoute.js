import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom"
import adminAuth from "./services/admin/auth.service";
import Auth from "./helpers/auth";

export const PrivateRouter = ({ children, ...rest }) => {

    return (
        <Route {...rest} render={({ location }) => {
            console.log({ location })
            return Auth.isAuthenticated ?
                children :
                <Redirect to={{
                    pathname: '/admin/login',
                    state: { from: location }
                }} />
        }} />
    )
}