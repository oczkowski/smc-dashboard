import React from 'react';
import { Link } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { toggleSidebar } from '../../actions';
// Sematnic UI
import { Button, Icon, Menu } from 'semantic-ui-react';

class HeaderBar extends React.Component {
    render() {
        return (
            <Menu id="header" pointing secondary>
                <img src="https://cdn.smct.co/403-445.png" alt="logo" />
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Button primary as={Link} to="/sign-up">
                            <Icon name="paper plane" />
                            Sign Up
                        </Button>
                    </Menu.Item>
                    <Menu.Item onClick={this.props.toggleSidebar}>
                        <Icon
                            style={{ color: 'white', cursor: 'pointer' }}
                            name="compass"
                            size="large"
                        />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default connect(
    null,
    { toggleSidebar }
)(HeaderBar);
