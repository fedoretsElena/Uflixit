import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import ErrorMsg from "../shared/ErrorMsg";
import ListGroup from "../shared/ListGroup";
import Loader from "../shared/Loader";
import Rating from "../shared/Rating";

import Movie from "../../models/Movie";
import TVShow from "../../models/TVShow";
import MediaService from "../../data/services/mediaService";

import "./MediaDetail.scss";

interface IState {
    media: TVShow | Movie | any;
    loaded: boolean;
    loading: boolean;
    error: string | null;
}

class MediaDetail extends Component<any, IState> {
    state: IState = {
        media: {},
        error: null,
        loaded: false,
        loading: false
    };

    mediaService = new MediaService();

    render() {
        const {
            year,
            creators,
            stars,
            keywords,
            yearStarted,
            yearEnded,
            summary,
            rating,
            title,
            image,
            genres,
            fanart
        } = this.state.media;
        const bgStyle = {
            backgroundImage: `url(${fanart})`
        };

        return (
            <>
                {this.state.loading && !this.state.error && <Loader />}
                {this.state.loaded && (
                    <div className="row mt-5 mb-5">
                        <div
                            className="media__bg cover-bg position-absolute w-100 h-100"
                            style={bgStyle}
                        />
                        <div className="col col-4 col--perspective">
                            <CSSTransition
                                in={!!image}
                                timeout={300}
                                appear={true}
                                classNames="fadeRotate"
                            >
                                <img
                                    className="d-block img-thumbnail mb-4"
                                    src={image}
                                    alt="media-poster"
                                />
                            </CSSTransition>

                            {genres.map((genre: string, i: number) => (
                                <span
                                    key={i}
                                    className="badge badge-secondary mr-2 py-1 px-2 mt-1"
                                >
                                    {genre}
                                </span>
                            ))}
                        </div>

                        <section className="col col-8">
                            <div className="d-flex justify-content-between align-items-center">
                                <h1 className="mb-0 w-75">{title}</h1>
                                <Rating value={rating} />
                            </div>
                            <div className="mt-1 text-primary">
                                {" "}
                                {yearStarted ? (
                                    <span>
                                        {yearStarted} - {yearEnded}
                                    </span>
                                ) : (
                                    year
                                )}{" "}
                            </div>

                            <div className="mt-5 w-75">{summary}</div>

                            <div className="mt-2 mb-2">
                                {keywords.map((word: string, i: number) => (
                                    <span
                                        key={i}
                                        className="badge badge-info mr-2 py-1 px-2 mt-1"
                                    >
                                        {word}
                                    </span>
                                ))}
                            </div>

                            <div className="row mt-4">
                                <div className="col col-6">
                                    {creators && creators.length > 0 && (
                                        <ListGroup
                                            title="Creators"
                                            list={creators}
                                        />
                                    )}
                                </div>

                                <div className="col col-6">
                                    {stars && stars.length > 0 && (
                                        <ListGroup title="Stars" list={stars} />
                                    )}
                                </div>
                            </div>
                        </section>

                        <section className="col-12 mt-4"> test</section>
                    </div>
                )}

                {this.state.error && <ErrorMsg msg={this.state.error} />}
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

        this.mediaService
            .getDetail(this.props.match.params.id, this.props.location)
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
                    error: "Can not get details by id."
                });
            });
    }
}

export default MediaDetail;
