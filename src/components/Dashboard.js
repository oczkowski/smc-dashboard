import React from 'react';
import { connect } from 'react-redux';
import { getOverlaysData } from '../actions';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.getOverlaysData();
    }

    prepareDate() {
        return this.props.overlaysData.map(data => {
            /**
             * Please note:
             * As this is an example formatting is done here
             * in real world application this would be done in a reducer.
             */
            return (
                <tr key={data['Tag Name']}>
                    <td data-label="Tag Name">{data['Tag Name']}</td>
                    <td data-label="Overlays Clicked">
                        {data['Overlays Clicked']}
                    </td>
                    <td data-label="Overlays Shown">
                        {data['Overlays Shown']}
                    </td>
                    <td data-label="User Impressions">
                        {data['User Impressions']}
                    </td>
                    <td data-label="Revenue">£{data['Revenue'].toFixed(2)}</td>
                </tr>
            );
        });
    }

    render() {
        console.log();
        return (
            <div className="ui segment center aligned">
                <h3>Dashboard</h3>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Tag Name</th>
                            <th>Overlays Clicked</th>
                            <th>Overlays Shown</th>
                            <th>User Impressions</th>
                            <th>Revenue</th>
                        </tr>
                    </thead>
                    <tbody>{this.prepareDate()}</tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        overlaysData: state.overlaysData
    };
};

export default connect(
    mapStateToProps,
    { getOverlaysData }
)(Dashboard);
