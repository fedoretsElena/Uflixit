import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import './core/HttpInterceptor';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import MediaDetail from './components/MediaDetail';
import SearchResults from './components/SearchResults';

function App() {
    return (
        <div>
            <Router>
                <Header/>

                <div className="container py-4">


                    <Switch>
                        <Route exact
                               path='/'
                               component={Home}/>

                        <Route exact
                               path='/tv-shows/:id'
                               component={MediaDetail}/>

                        <Route exact
                               path='/movies/:id'
                               component={MediaDetail}/>

                        <Route path='/search'
                               component={SearchResults}/>
                    </Switch>

                </div>

                <Footer/>
            </Router>
        </div>
    );
}

export default App;

