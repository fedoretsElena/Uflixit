import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import './core/HttpInterceptor';

import Home from './Home';
import Header from './Header';
import MediaDetail from './MediaDetail';

function App() {
    return (
        <div>
            <Header/>

            <div className="container py-4">

                <Router>
                    <Switch>
                        <Route exact
                               path='/'
                               component={Home}/>

                        <Route exact
                               path='/tv-shows/:id'
                               component={MediaDetail} />

                        <Route exact
                               path='/movies/:id'
                               component={MediaDetail}/>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;

