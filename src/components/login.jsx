import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../App.css';
class Login extends Component {
    state = {
        email: '',
        password: ''
    };
    handleSubmit = e => {
        e.preventDefault();
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
                    <div>
                        <div className="row">
                            <div className="form-group  mr-3">
                                <label>UserName:</label>
                                <input
                                    className="form-control"
                                    placeholder="Email"
                                />
                                <smal className="vi">Error</smal>
                            </div>
                            <div className=" form-group ml-3">
                                <label>Email:</label>
                                <input
                                    className="form-control"
                                    placeholder="******"
                                />
                                <smal className="vi">Error</smal>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn b ">
                                Login
                            </button>
                        </div>
                        <div className="text-center mt-4">
                            <Link className="text-success" to="/register">
                                Don't you have an account?
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;
