import React from 'react';
// CSS
import './SignUp.css';
// Components
import Dimmer from '../Dimmer/Dimmer';

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        disableSubmit: true,
        rememberMe: false
    };

    // Stolen from stack overflow - https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    validateEmail(email) {
        // Escape characters left out as this will still work, in production application I would remove these.
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    onFormSubmit = event => {
        event.preventDefault();
        /**
         * Do whatever we want with the state
         * for example we can submit it using axios,
         * then display an error message using another component which would handle it.
         * All depends on criteria.
         */
        const { email, password, rememberMe } = this.state;
        console.log(`
        Form has been submitted, here's some data:
        Email: ${email}
        Password: ${password}
        Remember Me: ${rememberMe}
        `);
        // We don't check if the user is allowed to submit as this would just be visual fix. We will check that in the back-end
    };

    componentDidUpdate() {
        // Check if all input fields are correct
        const correctEmail = this.validateEmail(this.state.email);
        const passwordMatch =
            this.state.password === this.state.confirmPassword &&
            this.state.password.length > 0; // This can be set to be the minimum password length, depending on  the rules

        if (correctEmail && passwordMatch && this.state.disableSubmit) {
            this.setState({ disableSubmit: false });
        } else if (
            (!correctEmail || !passwordMatch) &&
            !this.state.disableSubmit
        ) {
            this.setState({ disableSubmit: true });
        }
    }

    render() {
        /**
         * This modal component will not be pulled from semantic as it doesn't work well with react :(
         * And this is a controlled components
         */
        return (
            <div>
                <Dimmer />
                <div className="signup-modal">
                    <div className="header">Sign Up</div>
                    <div className="content">
                        <form className="ui form" onSubmit={this.onFormSubmit}>
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
                                        autoComplete="off"
                                    />
                                    <i className="user icon"></i>
                                </div>
                            </div>
                            {/* Password */}
                            <div className="field">
                                <label>Password</label>
                                <div className="ui left icon input">
                                    <input
                                        onChange={e =>
                                            this.setState({
                                                password: e.target.value
                                            })
                                        }
                                        value={this.state.password}
                                        className="cplaceholder"
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password..."
                                    />
                                    <i className="lock icon"></i>
                                </div>
                            </div>
                            {/* Password */}
                            <div className="field">
                                <div className="ui left icon input">
                                    <input
                                        onChange={e =>
                                            this.setState({
                                                confirmPassword: e.target.value
                                            })
                                        }
                                        value={this.state.confirmPassword}
                                        className="cplaceholder"
                                        type="password"
                                        name="password"
                                        placeholder="Confirm password..."
                                    />
                                    <i className="lock icon"></i>
                                </div>
                            </div>
                            {/* Submit and remember me button */}
                            <div className="ui grid right center aligned">
                                <div className="right six wide column">
                                    <button
                                        className="ui button"
                                        type="submit"
                                        disabled={this.state.disableSubmit}
                                    >
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
