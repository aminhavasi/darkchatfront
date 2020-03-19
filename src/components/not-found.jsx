import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NotFound extends Component {
    render() {
        return (
            <div
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#000000',
                    color: ' #004d00',
                    display: 'flex'
                }}
                className="justify-content-center align-items-center"
            >
                <div className="text-center">
                    <p className="display-4">404</p>
                    <p className="lead">this page not found</p>
                    <Link
                        to="/"
                        className="btn btn-block text-white"
                        style={{ backgroundColor: '#004d00' }}
                    >
                        Home
                    </Link>
                </div>
            </div>
        );
    }
}
export default NotFound;
