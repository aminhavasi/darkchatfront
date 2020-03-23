import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class Chat extends Component {
    state = { msg: [] };
    componentDidMount() {
        console.log('***');
        const so = socketIOClient('http://localhost:8000');
        so.on('iran', message => {
            const { msg } = this.state;
            const cloneMsg = [...msg];
            const newMsg = { id: message._id, text: message.text };
            cloneMsg.push(newMsg);
            this.setState({ msg: cloneMsg });
            console.log(this.state.msg);
        });
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
                    style={{ minHeight: '90vh' }}
                    className="d-flex justify-content-center align-items-center text-danger"
                >
                    <div
                        style={{
                            position: 'relative',
                            backgroundColor: '#1a1a1a',
                            width: '80%',
                            height: '80vh',
                            overflowY: 'scroll',
                            wordBreak: 'break-word',
                            overflowX: 'hidden',
                            scrollbarColor: '#009900   #001a00'
                        }}
                    >
                        <p
                            style={{
                                wordWrap: 'break-word',
                                textAlign: 'right'
                            }}
                        ></p>
                        <p
                            style={{
                                textAlign: 'left',
                                wordWrap: 'break-word'
                            }}
                        >
                            sdsd
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        className=""
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <input className="" size="110" />
                        <button
                            className="btn btn-sm btn-success"
                            style={{ height: '35px' }}
                        >
                            send
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;
