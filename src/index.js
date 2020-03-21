import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './components/not-found';
import Login from './components/login';
import Register from './components/register';
import Chat from './components/chat';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/not-found" component={NotFound} />
            <Route
                exact
                path="/login"
                render={() => {
                    if (localStorage.getItem('token')) {
                        return <Redirect to="/chat" />;
                    } else {
                        return <Login />;
                    }
                }}
            />
            <Route
                exact
                path="/register"
                render={() => {
                    if (localStorage.getItem('token')) {
                        return <Redirect to="/chat" />;
                    } else {
                        return <Register />;
                    }
                }}
            />
            <Route
                path="/chat"
                component={() => {
                    if (localStorage.getItem('token')) {
                        return <Chat />;
                    } else {
                        return <Redirect to="/" />;
                    }
                }}
            />

            <Redirect to="/not-found" />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
