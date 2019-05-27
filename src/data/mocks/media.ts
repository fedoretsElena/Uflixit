import BaseMedia from "../../models/BaseMedia";
import MediaFactory, { MediaType } from "../../models/MediaFactory";
import Movie from "../../models/Movie";
import TVShow from "../../models/TVShow";

export const media: BaseMedia[] = [
    {
        id: "1",
        title: "Game of Thrones"
    },
    {
        id: "2",
        title: "The walking Dead"
    }
].map(i => new BaseMedia(i, MediaType.Movie));

export const mediaDetail: Movie | TVShow = new MediaFactory(MediaType.TVShow, {
    ...media[0],
    creators: [],
    genres: [],
    keywords: [],
    status: "ends",
    yearEnded: "2019",
    yearStarted: "2010"
}).getMedia();
