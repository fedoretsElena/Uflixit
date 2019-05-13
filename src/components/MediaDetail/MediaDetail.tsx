import React, { Component } from 'react';

import Loader from '../shared/Loader';
import ErrorMsg from '../shared/ErrorMsg';

import Movie from '../../models/Movie';
import TVShow from '../../models/TVShow';
import MediaService from '../../services/mediaService';

interface IState {
    media: TVShow | Movie | any,
    loaded: boolean,
    loading: boolean,
    error: string | null
}

class MediaDetail extends Component<any> {
    state: IState = {
        media: {},
        error: null,
        loaded: false,
        loading: false
    };

    mediaService = new MediaService();

    render() {
        const {year, creators, stars, keywords, yearStarted, yearEnded, summary, rating, title, image, genres} = this.state.media;

        return (
            <>
                {this.state.loading && !this.state.error && <Loader/>}
                {this.state.loaded &&
                <div className="row">
                    <div className="col col-4">
                        <img className="img-thumbnail mb-3"
                             src={image}
                             alt="media-poster"/>

                        {genres.map((genre: string, i: number) =>
                            <span key={i}
                                  className="badge badge-secondary mr-2 py-1 px-2 mt-1">{genre}</span>)}
                    </div>

                    <section className="col col-8">
                        <div className="d-flex justify-content-between align-items-center">
                            <h1 className="mb-0 w-75">{title}</h1>
                            <span className="badge badge-warning">{rating}</span>
                        </div>
                        <div className="mt-1 text-primary"> {yearStarted ?
                            <span>{yearStarted} - {yearEnded}</span> : year} </div>

                        <div className="mt-5 w-75">
                            {summary}
                        </div>

                        <div className="mt-2 mb-2">
                            {keywords.map((word: string, i: number) =>
                                <span key={i}
                                      className="badge badge-info mr-2 py-1 px-2 mt-1">{word}</span>)}
                        </div>

                        <div className="row mt-4">
                            {creators && creators.length > 0 && <div className="col col-6">
                                <h5>Creators</h5>
                                <ul className="list-group list-group-flush">
                                    {creators.map((creator: string, i: number) =>
                                        <li key={i}
                                            className="list-group-item">{creator}</li>)}
                                </ul>
                            </div>}

                            <div className="col col-6">
                                <h5>Stars</h5>
                                <ul className="list-group list-group-flush">
                                    {stars.map((star: string, i: number) =>
                                        <li key={i}
                                            className="list-group-item">{star}</li>)}
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>}

                {this.state.error && <ErrorMsg msg={this.state.error}/>}
            </>
        );
    }

    componentDidMount(): void {
        this.getDetail();
    }

    private getDetail(): void {
        this.setState({
            loading: true
        });

        this.mediaService.getDetail(this.props.match.params.id, this.props.location)
            .then((data: Movie | TVShow) => {
                this.setState({
                    error: null,
                    loaded: true,
                    loading: false,
                    media: data
                });
            })
            .catch(() => {
                this.setState({
                    error: 'Can not get details by id.'
                });
            });
    }
}

export default MediaDetail;