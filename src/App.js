import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import './App.css';
class App extends Component {
    componentDidMount() {
        const socket = socketIOClient('http://localhost:8000');
        socket.on('newMessage', message => {
            console.log(message);
        });
    }
    render() {
        return <div className="App">welcome to my chat room</div>;
    }
}
export default App;
