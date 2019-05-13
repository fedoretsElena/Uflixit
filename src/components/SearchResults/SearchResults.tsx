import React, { Component } from 'react';
import { UnregisterCallback } from 'history';

import Title from '../shared/Title';
import Loader from '../shared/Loader';
import ErrorMsg from '../shared/ErrorMsg';
import MediaList from '../shared/MediaList';
import BaseMedia from '../../models/BaseMedia';
import { MediaType } from '../../models/MediaFactory';
import MediaService from '../../services/mediaService';

interface IProps {
    location: any,
    history: any
}

interface IStore {
    media: any;
    loading: boolean;
    loaded: boolean;
    error: string | null;
}

class SearchResults extends Component<IProps, IStore> {
    stopListenRoute: UnregisterCallback = () => {};
    mediaService: MediaService = new MediaService();
    state: IStore = {
        loading: false,
        loaded: false,
        error: null,
        media: []
    };

    render() {
        const { media, loaded, loading, error } = this.state;

        return (
            <>
                <Title title='Search results'
                       length={media.length}
                />
                {loading && !error && <Loader/>}
                {loaded && <MediaList items={media}
                                      type={MediaType.TVShow} />}
                {error && <ErrorMsg msg={error}/>}
            </>
        )
    }

    componentDidMount(): void {
        console.log('searching!');

        this.search();
        this.startListenRouteChanges();
    }

    componentWillUnmount(): void {
        console.log('stop!');
        this.stopListenRoute();
    }

    private search(newLocation?: any): void {
        const location: any = newLocation || this.props.location;
        const params = new URLSearchParams(location.search);

        this.setState({
            media: [],
            loading: true
        });

        this.mediaService.search(params)
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