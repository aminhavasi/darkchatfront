import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Chat from './components/chat';
import Home from './components/home';
class App extends Component {
    state = {
        id: ''
    };

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path="/chat"
                        render={() => {
                            if (localStorage.getItem('token')) {
                                return <Chat />;
                            } else {
                                return <Redirect to="/login" />;
                            }
                        }}
                    />

                    <Redirect to="/not-found" />
                </Switch>
            </div>
        );
    }
}
export default App;
