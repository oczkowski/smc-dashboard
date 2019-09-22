import React from 'react';
// CSS
import './SignUp.css';
// Components
import Dimmer from '../Dimmer/Dimmer';

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        mfa: '',
        rememberMe: false
    };

    handleMFA = e => {
        const mfa = e.target.value;
        if (!isNaN(mfa))
            this.setState({
                mfa
            });
    };

    render() {
        /**
         * This modal component will not be pulled from semantic as it doesn't work well with react :(
         * And this is a controlled components
         */
        return (
            <div>
                <Dimmer />
                <div className="signup-modal">
                    <div className="header">Sign Up with Google</div>
                    <div className="content">
                        <form className="ui form">
                            {/* Email */}
                            <div className="field">
                                <label>Email</label>
                                <div className="ui left icon input">
                                    <input
                                        onChange={e =>
                                            this.setState({
                                                email: e.target.value
                                            })
                                        }
                                        value={this.state.email}
                                        className="cplaceholder"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email..."
                                    />
                                    <i className="user icon"></i>
                                </div>
                            </div>
                            {/* Password */}
                            <div className="field">
                                <label>Password</label>
                                <div className="ui left icon input">
                                    <input
                                        className="cplaceholder"
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password..."
                                    />
                                    <i className="lock icon"></i>
                                </div>
                            </div>
                            {/* MFA */}
                            <div className="field hide">
                                <div className="ui left icon input">
                                    <input
                                        onChange={this.handleMFA}
                                        value={this.state.mfa}
                                        data-lpignore="true"
                                        className="cplaceholder"
                                        type="text"
                                        name="mfa"
                                        placeholder="[Enter your MFA]"
                                    />
                                    <i className="clock icon"></i>
                                </div>
                            </div>
                            {/* Submit and remember me button */}
                            <div className="ui grid right center aligned">
                                <div className="right six wide column">
                                    <button className="ui button" type="submit">
                                        Submit
                                    </button>
                                </div>
                                <div className="field six wide column middle aligned">
                                    <div className="ui checkbox">
                                        <input type="checkbox" tabIndex="0" />
                                        <label>Remember Me</label>
                                    </div>
                                </div>
                            </div>
                            {/* End of submit and remember */}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
