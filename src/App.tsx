import React from "react";
import {
    BrowserRouter,
    Redirect,
    Route,
    Switch
} from "react-router-dom";

import "./App.scss";

import "./core/HttpInterceptor";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import MediaDetail from "./components/MediaDetail";
import SearchResults from "./components/SearchResults";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />

                <div className="container py-4">
                    <Switch>
                        <Route exact path="/home" component={Home} />

                        <Route
                            exact
                            path="/tv-shows/:id"
                            component={MediaDetail}
                        />

                        <Route
                            exact
                            path="/movies/:id"
                            component={MediaDetail}
                        />

                        <Route path="/search" component={SearchResults} />

                        <Route path="/login" component={Login} />

                        <Route
                            path="/"
                            render={() => <Redirect to="/home" />}
                        />
                    </Switch>
                </div>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
