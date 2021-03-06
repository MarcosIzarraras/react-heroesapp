import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {

    const {user:{logged}} = useContext(AuthContext);

    return (

        <Router>
            <div>
                <Switch>
                    <PublicRouter isAuth={logged} exact path="/login" component={ LoginScreen } />
                    <PrivateRouter isAuth={logged} path="/" component={ DashboardRouter } />
                </Switch>
            </div>
        </Router>
    )
}
