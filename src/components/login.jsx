import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login } from './../services/httpPost';
import './../App.css';
class Login extends Component {
    state = {
        email: '',
        password: ''
    };
    showError = (input, message) => {
        const formGroup = input.parentElement;
        formGroup.className = 'form-group error';
        const small = formGroup.querySelector('small');

        small.innerText = message;
    };
    showSuccess = input => {
        const fromGroup = input.parentElement;
        fromGroup.className = 'form-group';
    };

    checkRequired = arr => {
        let check = 0;
        arr.forEach(input => {
            if (input.value.trim() === '') {
                this.showError(input, `${input.id} is required`);
                check++;
            } else {
                this.showSuccess(input);
            }
        });
        if (check > 0) {
            return false;
        }
        return true;
    };
    handleSubmit = async e => {
        try {
            e.preventDefault();
            let email = document.getElementById('email');
            let password = document.getElementById('password');
            const result = await this.checkRequired([email, password]);
            if (result) {
                const { email, password } = this.state;
                const { data } = await login(email, password);
                localStorage.setItem('token', data.token);
                console.log(data.user._id);
                localStorage.setItem('chatId', data.user._id);
            }
        } catch (error) {
            console.log(error);
        }
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
                    <div className="container-fluid">
                        <div className="row">
                            <div className="form-group  ">
                                <label>Email or UserName:</label>
                                <input
                                    type="text"
                                    id="email"
                                    className="form-control mr-3"
                                    placeholder="example@info.com /example"
                                    value={this.state.email}
                                    onChange={e =>
                                        this.setState({ email: e.target.value })
                                    }
                                />
                                <small className="vi mr-3">Error</small>
                            </div>
                            <div className="form-group">
                                <label>password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control ml-3 "
                                    placeholder="******"
                                    value={this.state.password}
                                    onChange={e =>
                                        this.setState({
                                            password: e.target.value
                                        })
                                    }
                                />
                                <small className="vi ml-3">Error</small>
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
