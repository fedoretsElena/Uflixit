import React, { Component } from "react";

import Review from "../../../models/Review";
import ReviewsList from "./ReviewsList";
import ErrorMsg from "../../shared/ErrorMsg";
import Loader from "../../shared/Loader";
import MediaService from "../../../data/services/mediaService";

interface IState {
    data: Review[];
    loaded: boolean;
    loading: boolean;
    error: string | null;
}

interface IProps {
    title: string;
    location: { pathname: string };
}

class Reviews extends Component<IProps, IState> {
    state: IState = {
        data: [],
        loaded: false,
        loading: false,
        error: null
    };

    mediaService = new MediaService();

    render() {
        const { title } = this.props;
        const { error, loaded, loading, data } = this.state;

        return (
            <div>
                <h5 className="mb-3">Reviews of {title}</h5>
                {loading && <Loader />}
                {loaded && <ReviewsList reviews={data} />}
                {error && <ErrorMsg msg={error} />}
            </div>
        );
    }

    componentDidMount(): void {
        this.getReviews();
    }

    private getReviews(): void {
        const { location, title } = this.props;

        this.setState({
            loading: true
        });

        this.mediaService
            .getReviews(title, location)
            .then((data: Review[]) => {
                this.setState({
                    data,
                    loading: false,
                    loaded: true,
                    error: null
                });
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    error: "API isn't available."
                });
            });
    }
}

export default Reviews;
