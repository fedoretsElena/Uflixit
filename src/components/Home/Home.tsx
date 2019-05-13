import React, { Component } from 'react';

import PopularShows from '../PopularShows/PopularShows';
import WantedMovies from '../WantedMovies/WantedMovies';

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