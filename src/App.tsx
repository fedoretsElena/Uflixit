import React, { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import "./App.scss";

import "./core/HttpInterceptor";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Loader from "./components/shared/Loader";

const MediaDetail = lazy(() => import("./components/MediaDetail"));
const SearchResults = lazy(() => import("./components/SearchResults"));

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Suspense fallback={<Loader />}>
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
                </Suspense>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
