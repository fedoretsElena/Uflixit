import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ReviewItem from "../ReviewsItem";
import Review from "../../../../models/Review";
import ErrorMsg from "../../../shared/ErrorMsg";
import InfinityScroll from "../../../shared/InfinityScroll";

import "./ReviewsList.scss";

interface IProps {
    reviews: Review[];
}

const ReviewsList = ({ reviews }: IProps) => {
    const MAX: number = 5;
    let [visibleReviews, incReviews] = useState(reviews.slice(0, 5));

    function showMore(): void {
        const part = reviews.slice(0, visibleReviews.length + MAX);

        visibleReviews = part;
        incReviews(part);
    }

    return (
        <section className="border-top">
            <TransitionGroup component={null}>
                {visibleReviews.map((review, index) => (
                    <CSSTransition
                        timeout={1500}
                        appear={true}
                        classNames="fadeIn"
                        key={review.id}
                    >
                        <ReviewItem
                            review={review}
                            index={index > 9 ? index / 5 : index}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>

            <InfinityScroll
                listenUntil={visibleReviews.length < reviews.length}
                endPageHappend={showMore}
            />

            {!reviews.length && <ErrorMsg msg="There is no reviews yet." />}
        </section>
    );
};

export default ReviewsList;
