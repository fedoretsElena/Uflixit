interface IMedia {
}

class Media {
    id: string;
    title: string;
    rating: number;
    duration: number;
    published: string;
    image: string;
    stars: string[];
    countries: string[];
    keywords: string[];
    genres: string[];
    trailer: string;
    creators: string[];
    summary: string;
    yearStarted: string;
    yearEnded: string;
    status: string;

    constructor(data: any) {
        this.id = data.imdb_id;
        this.title = data.title;
        this.rating = data.rating;
        this.duration = data.duration;
        this.published = data.published;
        this.image = data.image;
        this.stars = data.stars.slice(0, 5);
        this.countries = data.countries;
        this.keywords = data.keywords.slice(0, 10);
        this.genres = data.genres;
        this.trailer = data.trailer;
        this.creators = data.creators;
        this.summary = data.summary;
        this.yearStarted = data.year_started || 'unknown';
        this.yearEnded = data.year_ended || 'not yet';
        this.status = data.status;
    }
}

export default Media;