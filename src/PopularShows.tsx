import React, { Component } from 'react';
import axios from 'axios';

import ApiConfig from './core/ApiConfig';

import Error from './Error';
import Loader from './Loader';
import MediaList from './MediaList';

interface IProps {
}

interface IState {
    shows: any[],
    loaded: boolean,
    loading: boolean,
    error: string | null
}

class PopularShows extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            shows: [],
            error: null,
            loaded: false,
            loading: false
        };
    }

    render() {
        return (
            <>
                { this.state.loading && <Loader/> }
                { this.state.loaded && <MediaList items={this.state.shows} /> }
                { this.state.error && <Error msg={this.state.error} />}
            </>
        );
    }

    componentDidMount(): void {
        this.getPopularShows();
    }

    private getPopularShows(): void {
        this.setState({
            loading: true
        });

        axios.get(ApiConfig.getPopularShowsPath)
            .then((res: any) => this.getShowsPosters(res.slice(0, 15)))
            .catch(() => this.setState({
                loading: false,
                error: 'Can not get ids of TV shows.'
            }));
    }

    private getShowsPosters(ids: string[]): void {
        let shows: { id?: string, poster?: string }[] = [...ids.map(id => {
            return {id}
        })];

        axios.all(ids.map(id => this.getShowsPoster(id)))
            .then((res: string[]) => {

                res.forEach((item, index) => {
                    shows[index].poster = item;
                });

                this.setState({
                    shows,
                    error: null,
                    loaded: true,
                    loading: false
                });
            })
            .catch(() => this.setState({
                loading: false,
                error: 'Can not get posters of TV shows using ids.'
            })
        );
    }

    private getShowsPoster(id: string): Promise<any> {
        return axios.get(ApiConfig.getShowPosterPath.replace('{id}', id));
    }
}

export default PopularShows;