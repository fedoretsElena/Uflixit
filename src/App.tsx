import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import './core/HttpInterceptor';

import Header from './Header';
import MediaDetail from './MediaDetail';
import PopularShows from './PopularShows';

function App() {
    return (
        <div>
            <Header/>

            <div className="container py-4">

                <Router>
                    <Switch>
                        <Route exact
                               path='/'
                               component={PopularShows}/>

                        <Route exact
                               path='/:id'
                               component={MediaDetail}/>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;

