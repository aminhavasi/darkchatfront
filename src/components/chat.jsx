import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class Chat extends Component {
    state = { msg: [] };
    socket = () => {
        const so = socketIOClient('http://localhost:8000');
        so.on('newMessage', message => {
            const { msg } = this.state;
            const cloneMsg = [...msg];
            const newMsg = { id: message._id, text: message.text };
            cloneMsg.push(newMsg);
            this.setState({ msg: cloneMsg });
            console.log(this.state.msg);
        });
    };

    componentDidMount() {
        this.socket();
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
                        {this.state.msg.map(m =>
                            m.id === localStorage.getItem('chatId') ? (
                                <p
                                    className="p-2"
                                    key={m.id}
                                    style={{
                                        wordWrap: 'break-word',
                                        textAlign: 'right',
                                        color: 'blue'
                                    }}
                                >
                                    {m.text}
                                </p>
                            ) : (
                                <p
                                    key={m.id}
                                    className="p-2"
                                    style={{
                                        textAlign: 'left',
                                        wordWrap: 'break-word'
                                    }}
                                >
                                    {`* ${m.text}`}
                                </p>
                            )
                        )}
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
                        <input id="btntbn" size="110" />
                        <button
                            onClick={this.handleInput}
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
