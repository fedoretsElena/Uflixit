import Media from './Media';

interface IMovie {
}

class Movie  extends Media {
    director: string;

    constructor(data: any) {
        super(data);

        this.director = data.director;
    }
}

export default Movie;