import BaseMedia from "../../../models/BaseMedia";
import MediaFactory, { MediaType } from "../../../models/MediaFactory";
import Movie from "../../../models/Movie";
import TVShow from "../../../models/TVShow";

export default class MediaService {
    media: BaseMedia[] = [
        {
            id: "1",
            title: "Game of Thrones"
        }, {
            id: "2",
            title: "The walking Dead"
        }].map(i => new BaseMedia(i, MediaType.Movie));

    mediaDetail: Movie | TVShow = new MediaFactory(MediaType.TVShow, {
        ...this.media[0],
        creators: [],
        status: "ends",
        yearEnded: "2019",
        yearStarted: "2010"
    }).getMedia();

    getWantedMoviesIds(): Promise<BaseMedia[]> {
        return new Promise(resolve => {
            resolve(this.media);
        });
    }

    getDetail(): Promise<Movie | TVShow> {
        return new Promise<Movie | TVShow>(resolve => {
            resolve(this.mediaDetail);
        });
    }

    search(): Promise<BaseMedia[]> {
        return new Promise<BaseMedia[]>(resolve => {
            resolve(this.media.slice(0, 1));
        });
    }
}