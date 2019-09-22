import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div id="header" className="ui secondary pointing menu">
                <img src="https://cdn.smct.co/403-445.png" />
                <Link to="/" className="item">
                    Dashboard
                </Link>
                <div className="right menu">
                    <Link to="/photo-viewer" className="item">
                        Photo Viewer
                    </Link>
                    <Link to="/sign-up" className="item">
                        Sign Up
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;
