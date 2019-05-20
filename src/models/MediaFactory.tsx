import Movie from "./Movie";
import TVShow from "./TVShow";

export enum MediaType {
    Movie = "movie",
    TVShow = "tv-show",
    Another = "another"
}

class MediaFactory {
    private readonly media: Movie | TVShow;

    constructor(type: MediaType, data: any) {
        this.media =
            type === MediaType.Movie ? new Movie(data) : new TVShow(data);
    }

    getMedia(): Movie | TVShow {
        return this.media;
    }
}

export default MediaFactory;
