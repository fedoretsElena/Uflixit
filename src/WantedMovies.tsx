import React, { Component } from 'react';
import axios from 'axios';

import ErrorMsg from './ErrorMsg';
import Title from './Title';
import Loader from './Loader';
import MediaList from './MediaList';
import ApiConfig from './core/ApiConfig';

interface IState {
    movies: any[],
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

    render() {
        const {loaded, loading, error, movies} = this.state;

        return (
            <>
                <Title title='Wanted movies'
                       length={movies.length} />
                {loading && ( <Loader/> )}
                {loaded && movies && ( <MediaList items={movies}
                                                  type={'movies'} />)}
                {error && !loading && (<ErrorMsg msg={error} />)}
            </>
        );
    }

    componentDidMount(): void {

        this.getWantedMoviesIds()
            .then(res => this.getWantedMoviesPosters(res));
    }

    private getWantedMoviesIds(): Promise<any> {
        this.setState({
            loading: true
        });

        return axios.get(ApiConfig.getWantedMoviesPath);
    }

    private getWantedMoviesPosters(ids: string[]): void {
        let movies: { id?: string, poster?: string }[] = [...ids.map(id => {
            return {id}
        })];

        axios.all(ids.map(id => axios.get(ApiConfig.getMoviePosterPath.replace('{id}', id))))
            .then((res: any) => {

                res.forEach((item: string, index: number) => {
                    movies[index].poster = item;
                });

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
