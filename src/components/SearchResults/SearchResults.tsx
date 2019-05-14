import React, { Component } from 'react';
import { UnregisterCallback } from 'history';
import axios, { AxiosRequestConfig } from 'axios';

import Title from '../shared/Title';
import Loader from '../shared/Loader';
import ErrorMsg from '../shared/ErrorMsg';
import MediaList from '../shared/MediaList';
import BaseMedia from '../../models/BaseMedia';
import MediaService from '../../services/MediaService';

interface IProps {
    location: any,
    history: any
}

interface IStore {
    media: BaseMedia[];
    loading: boolean;
    loaded: boolean;
    error: string | null;
}

class SearchResults extends Component<IProps, IStore> {
    stopListenRoute: UnregisterCallback = () => {
    };
    cancelSearchRequest: Function = () => {
    };
    mediaService: MediaService = new MediaService();
    state: IStore = {
        loading: false,
        loaded: false,
        error: null,
        media: []
    };

    render() {
        const {media, loaded, loading, error} = this.state;

        return (
            <>
                <Title title='Search results'
                       length={media.length}
                />
                {loading && !error && <Loader/>}
                {loaded && <MediaList items={media} />}
                {error && <ErrorMsg msg={error}/>}
            </>
        )
    }

    componentDidMount(): void {
        this.search();
        this.startListenRouteChanges();
    }

    // TODO: there is warning about memory leak, BUT request is canceled and route changes aren't listening
    componentWillUnmount(): void {
        this.cancelSearchRequest();
        this.stopListenRoute();
    }

    private search(newLocation?: any): void {
        const location: any = newLocation || this.props.location;
        const params = new URLSearchParams(location.search);

        this.setState({
            media: [],
            loading: true
        });

        const config: AxiosRequestConfig = {
            params,
            cancelToken: new axios.CancelToken((c) => {
                // An executor function receives a cancel function as a parameter
                this.cancelSearchRequest = c;
            })
        };

        this.mediaService.search(config)
            .then((res: BaseMedia[]) => {

                    this.setState({
                        media: res,
                        loaded: true,
                        loading: false,
                        error: null
                    })
                }
            )
            .catch(() => this.setState({
                    error: 'There is no game according to the request.',
                    loading: false
                })
            );
    }

    private startListenRouteChanges(): void {
        this.stopListenRoute = this.props.history.listen((location: any) => this.search(location));
    }
}

export default SearchResults;