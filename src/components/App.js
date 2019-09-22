import React from 'react';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers'; // Import combined reducers
// Router
import { BrowserRouter, Route } from 'react-router-dom';
// CSS
import './main.css';
// Components
import HeaderBar from './Header/HeaderBar';
import Dashboard from './Dashboard';
import SideBar from './Header/SideBar';

import PhotoViewer from './utilities/PhotoViewer/';
import SignUp from './utilities/SignUp/SignUp';

class App extends React.Component {
    content() {
        return (
            <div>
                <Route path="/" exact component={Dashboard} />
                <Route path="/photo-viewer" component={PhotoViewer} />
                <Route path="/sign-up" component={SignUp} />
            </div>
        );
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <BrowserRouter>
                    <HeaderBar />
                    <div className="ui container">
                        <SideBar content={this.content()} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
