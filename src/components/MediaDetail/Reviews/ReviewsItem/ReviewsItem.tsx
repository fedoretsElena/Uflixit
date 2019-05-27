import React from "react";

import "./ReviewsItem.scss";
import Review from "../../../../models/Review";

interface IProps {
    review: Review;
    index: number;
}

const ReviewItem = ({ review, index }: IProps) => {
    const size = review.id.toString().slice(0, 2); // for getting uniq imgs

    return (
        <div
            className="review row align-items-start my-3 py-2 px-2"
            style={{ transitionDelay: `${100 * index}ms` }}
        >
            <img
                src={"https://picsum.photos/" + size}
                className="col-1 rounded-circle"
                alt="author_photo"
            />

            <div className="review__author col-3 pr-4">
                <h5 className="mt-0 mb-0">{review.author}</h5>
                <span className="mb-2 d-block text-secondary">
                    {review.source}
                </span>
            </div>

            <div className="col-7">{review.summary}</div>
        </div>
    );
};

export default ReviewItem;
