import React, { Component } from 'react';

import ErrorMsg from '../shared/ErrorMsg';
import Title from '../shared/Title';
import Loader from '../shared/Loader';
import MediaList from '../shared/MediaList';
import MediaService from '../../services/mediaService';
import BaseMedia from '../../models/BaseMedia';

interface IState {
    movies: BaseMedia[],
    loaded: boolean,
    loading: boolean
    error: string | null,
}

class WantedMovies extends Component {
    state: IState = {
        movies: [],
        error: null,
        loaded: false,
        loading: false
    };
    mediaService: MediaService = new MediaService();

    render() {
        const {loaded, loading, error, movies} = this.state;

        return (
            <>
                <Title title='Wanted movies'
                       length={movies.length}/>
                {loading && (<Loader/>)}
                {loaded && movies && (<MediaList items={movies} />)}
                {error && !loading && (<ErrorMsg msg={error}/>)}
            </>
        );
    }

    componentDidMount(): void {

        this.getWantedMovies();
    }

    private getWantedMovies(): void {
        this.setState({
            loading: true
        });

        this.mediaService.getWantedMoviesIds()
            .then((movies: BaseMedia[]) => {
                this.setState({
                    movies,
                    error: null,
                    loaded: true,
                    loading: false
                });
            })
            .catch(() => this.setState({
                    loading: false,
                    error: 'Can not get posters of movies using ids.'
                })
            );
    }
}

export default WantedMovies;
