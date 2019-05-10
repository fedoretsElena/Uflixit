import React, { Component } from 'react';
import axios from 'axios';

import ApiConfig from './core/ApiConfig';

import Title from './shared/Title';
import Loader from './shared/Loader';
import ErrorMsg from './shared/ErrorMsg';
import MediaList from './shared/MediaList';

interface IProps {
}

interface IState {
    shows: any[],
    loaded: boolean,
    loading: boolean,
    error: null | string
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
        const { shows, error } = this.state;
        return (
            <>
                <Title title='Popular shows'
                       length={shows.length} />
                { this.state.loading && <Loader/> }
                { this.state.loaded && <MediaList items={shows}
                                                  type='tv-shows' /> }
                { this.state.error && <ErrorMsg msg={error} />}
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

        axios.get(ApiConfig.getPopularTVShowsPath)
            .then((res: any) => this.getShowsPosters(res.slice(0, 10)))
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
        return axios.get(ApiConfig.getTVShowPosterPath.replace('{id}', id));
    }
}

export default PopularShows;