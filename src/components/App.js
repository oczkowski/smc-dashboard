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
import Header from './Header';
import Dashboard from './Dashboard';

import PhotoViewer from './utilities/PhotoViewer/';
import SignUp from './utilities/SignUp';

class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <BrowserRouter>
                    <div className="main">
                        <Header />
                        <div className="ui container">
                            <Route path="/" exact component={Dashboard} />
                            <Route
                                path="/photo-viewer"
                                component={PhotoViewer}
                            />
                            <Route path="/sign-up" component={SignUp} />
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
