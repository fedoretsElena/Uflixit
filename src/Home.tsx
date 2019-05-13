import React, { Component } from 'react';

import PopularShows from './PopularShows';
import WantedMovies from './WantedMovies';

class Home extends Component {
    render() {
        return (
            <>
                <PopularShows />
                <WantedMovies />
            </>
        );
    }
}

export default Home;