import Movie from './Movie';
import TVShow from './TVShow';

export enum MediaType {
    Movie = 'movie',
    TVShow = 'tv-show'
}

class MediaFactory {
    private readonly _media: Movie | TVShow;

    constructor(type: MediaType, data: any) {
        console.log(type);
        this._media = type === MediaType.Movie ? new Movie(data) : new TVShow(data);
    }

    getMedia(): Movie | TVShow {
        return this._media;
    }
}

export default MediaFactory;