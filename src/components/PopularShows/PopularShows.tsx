import React, { Component } from 'react';

import Title from '../shared/Title';
import Loader from '../shared/Loader';
import ErrorMsg from '../shared/ErrorMsg';
import MediaList from '../shared/MediaList';
import MediaService from '../../services/mediaService';
import BaseMedia from '../../models/BaseMedia';

interface IProps {
}

interface IState {
    shows: BaseMedia[],
    loaded: boolean,
    loading: boolean,
    error: null | string
}

class PopularShows extends Component<IProps, IState> {
    mediaService: MediaService;

    constructor(props: IProps) {
        super(props);

        this.state = {
            shows: [],
            error: null,
            loaded: false,
            loading: false
        };

        this.mediaService = new MediaService();
    }

    render() {
        const {shows, error} = this.state;
        return (
            <>
                <Title title='Popular shows'
                       length={shows.length}/>
                {this.state.loading && <Loader/>}
                {this.state.loaded && <MediaList items={shows} />}
                {this.state.error && <ErrorMsg msg={error}/>}
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

        this.mediaService.getPopularShows()
            .then((shows: BaseMedia[]) => {

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
}

export default PopularShows;