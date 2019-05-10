import BaseMedia from './BaseMedia';

interface IMovie {
}

class Movie  extends BaseMedia {
    director: string;

    constructor(data: any) {
        super(data);

        this.director = data.director;
    }
}

export default Movie;