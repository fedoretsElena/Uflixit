import mocks from "../../mocks";
import TVShow from "../../../models/TVShow";
import Movie from "../../../models/Movie";
import Review from "../../../models/Review";
import BaseMedia from "../../../models/BaseMedia";

export default class MediaService {
    getWantedMoviesIds(): Promise<BaseMedia[]> {
        return new Promise(resolve => {
            resolve(mocks.media);
        });
    }

    getDetail(): Promise<Movie | TVShow> {
        return new Promise<Movie | TVShow>(resolve => {
            resolve(mocks.mediaDetail);
        });
    }

    search(): Promise<BaseMedia[]> {
        return new Promise<BaseMedia[]>(resolve => {
            resolve(mocks.media.slice(0, 1));
        });
    }

    getReviews(): Promise<Review[]> {
        return new Promise<Review[]>(resolve => {
            resolve(mocks.reviews.map(i => new Review(i)));
        });
    }
}
