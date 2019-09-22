import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SideBar extends React.Component {
    toggleSideBar() {
        /**
         * This would be done differently if I used another library, unfortunately this one doesn't work well with React
         */
        window.$('.ui.sidebar').sidebar('toggle');
    }

    componentDidUpdate() {
        if (this.props.toggle.tof) {
            this.toggleSideBar();
        }
    }

    render() {
        return (
            <div>
                <div
                    onClick={this.toggleSideBar}
                    className="ui right sidebar inverted vertical menu"
                >
                    <Link className="item" to="/">
                        Dashboard
                    </Link>
                    <Link className="item" to="/photo-viewer">
                        Photo Viewer
                    </Link>
                </div>
                <div className="dimmed pusher">{this.props.content}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        toggle: state.toggleSidebar
    };
};

export default connect(mapStateToProps)(SideBar);
