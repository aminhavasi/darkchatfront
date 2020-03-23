import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class Chat extends Component {
    componentDidMount() {
        const socket = socketIOClient('http://localhost:8000');
        socket.emit('irann', { text: 'jijiji' });
    }
    render() {
        return (
            <div style={{ minHeight: '100vh', backgroundColor: 'black' }}>
                <nav className="fixed-top">
                    <a href="#" className="text-success">
                        logout
                    </a>
                </nav>
                <div
                    style={{ minHeight: '100vh' }}
                    className="d-flex justify-content-center align-items-center text-danger"
                >
                    <div
                        style={{
                            backgroundColor: '#1a1a1a',
                            width: '80%',
                            height: '80vh',
                            overflowY: 'scroll',
                            wordBreak: 'break-word',
                            overflowX: 'hidden',
                            scrollbarColor: '#009900   #001a00'
                        }}
                    ></div>
                </div>
            </div>
        );
    }
}

export default Chat;
