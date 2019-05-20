import Media from "./Media";
import { MediaType } from "./MediaFactory";

class Movie extends Media {
    director: string;

    constructor(data: any) {
        super(data, MediaType.Movie);

        this.director = data.director;
    }
}

export default Movie;
