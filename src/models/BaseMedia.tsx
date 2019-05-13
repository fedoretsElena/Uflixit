interface IBaseMedia {
}

class BaseMedia {
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
    summary: string;
    year: number;

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
        this.summary = data.summary;
        this.year = data.year;
    }
}

export default BaseMedia;