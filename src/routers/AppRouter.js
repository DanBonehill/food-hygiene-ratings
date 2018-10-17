import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import {Header} from "../components/Header";

const AppRouter = () => (
    <Router>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={DashboardPage} exact/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter