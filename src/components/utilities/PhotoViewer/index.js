import React from 'react';
import { connect } from 'react-redux';
// CSS
import './PhotoViewer.css';
// Import actions
import { getPhoto } from '../../../actions';

class PhotoViewer extends React.Component {
    componentDidMount() {
        this.props.getPhoto(); // Here we could pass in a photo we'd want to fetch
    }

    render() {
        const { name, url } = this.props.photo;
        return (
            <div className="twelve wide column pv-holder">
                <div className="header">Photo name: {name}</div>
                <img className="ui fluid image" src={url} alt="Preview" />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        photo: state.photoToView
    };
};

export default connect(
    mapStateToProps,
    { getPhoto }
)(PhotoViewer);
