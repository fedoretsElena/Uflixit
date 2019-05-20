import BaseMedia from './BaseMedia';
import { MediaType } from './MediaFactory';

interface IMedia {
}

class Media extends BaseMedia{
    rating: number;
    duration: number;
    published: string;
    stars: string[];
    countries: string[];
    keywords: string[];
    genres: string[];
    trailer: string;
    summary: string;
    year: number;
    fanart: string;

    constructor(data: any, type: MediaType) {
        super(data, type);

        this.rating = data.rating;
        this.duration = data.duration;
        this.published = data.published;
        this.stars = data.stars.slice(0, 5);
        this.countries = data.countries;
        this.keywords = data.keywords.slice(0, 10);
        this.genres = data.genres;
        this.trailer = data.trailer;
        this.summary = data.summary;
        this.year = data.year;
        this.fanart = data.fanart;
    }
}

export default Media;