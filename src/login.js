import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Button } from 'semantic-ui-react';

function Login() {

    return (
        <div>
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <h2>Welcome to JobFinder</h2>
                    </div>
                    <form className="login-form">
                        <input type="email" id='email-txt' placeholder="Email Address" required />
                        <input type="password" id='password' placeholder="Password" required />
                        <br/><br/>
                        <Link to="/jobs">
                            <button>
                                LOG IN
                            </button>
                        </Link>
                    </form>
                    <br/>
                    <a href="#" className="forgot-password">FORGOT PASSWORD?</a>
                </div>
            </div>
        </div>
        
    );
}

export default Login;