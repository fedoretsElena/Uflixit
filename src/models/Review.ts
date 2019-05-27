export interface IReview {
    critic_source: string;
    critic_author: string;
    critic_summary: string;
}

export default class Review {
    id: number;
    source: string;
    author: string;
    summary: string;

    constructor(review: IReview) {
        this.id = Math.round(Math.random() * +new Date());
        this.source = review.critic_source;
        this.author = review.critic_author;
        this.summary = review.critic_summary;
    }
}
