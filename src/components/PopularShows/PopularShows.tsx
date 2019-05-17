import React, { Component } from 'react';

import Title from '../shared/Title';
import Loader from '../shared/Loader';
import ErrorMsg from '../shared/ErrorMsg';
import MediaList from '../shared/MediaList';
import MediaService from '../../services/mediaService';
import IMediaResponse from '../../models/MediaResponse';
import BaseMedia from '../../models/BaseMedia';

interface IProps {
}

interface IState {
    media: BaseMedia[],
    nav: { curr: number, length: number },
    loaded: boolean,
    loading: boolean,
    error: null | string
}

class PopularShows extends Component<IProps, IState> {
    mediaService: MediaService;

    constructor(props: IProps) {
        super(props);

        this.state = {
            media: [],
            nav: {
                curr: 1,
                length: 0
            },
            error: null,
            loaded: false,
            loading: false
        };

        this.mediaService = new MediaService();
    }

    render() {
        const {media, nav, nav: {length}, error} = this.state;

        return (
            <>
                <Title title='Popular shows'
                       length={length * 10}/>
                {this.state.loading && <Loader/>}

                {this.state.loaded && <MediaList items={media}
                                                 pages={nav}
                                                 uploadMediaForStep={this.getPopularShows}
                />}
                {this.state.error && <ErrorMsg msg={error}/>}
            </>
        );
    }

    componentDidMount(): void {
        this.getPopularShows();
    }

    getPopularShows = (step?: number): void => {
        this.setState({
            loading: true,
            media: []
        });

        this.mediaService.getPopularShows(step)
            .then((data: IMediaResponse) => {

                this.setState({
                    media: data.media,
                    nav: data.pages,
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