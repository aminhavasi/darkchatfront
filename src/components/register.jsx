import React, { Component } from 'react';
import './../App.css';
import { register } from './../services/httpPost';
class Register extends Component {
    state = {
        email: '',
        password: '',
        username: ''
    };

    handleSubmit = async e => {
        e.preventDefault();
        let { username, email, password } = this.state;
        const result = await register(username, email, password);
    };
    render() {
        return (
            <div
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#000000',
                    color: ' #009900',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <form onSubmit={this.handleSubmit}>
                    <div className="container-fluid ">
                        <div className="form-group">
                            <label>Username:</label>
                            <input
                                className="form-control"
                                value={this.state.username}
                                onChange={e =>
                                    this.setState({ username: e.target.value })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                className="form-control"
                                value={this.state.email}
                                onChange={e =>
                                    this.setState({ email: e.target.value })
                                }
                            />
                        </div>{' '}
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                className="form-control"
                                value={this.state.password}
                                onChange={e =>
                                    this.setState({ password: e.target.value })
                                }
                            />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-success ">
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default Register;
