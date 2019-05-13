import Media from './Media';

interface ITVShow {
}

class TVShow extends Media {
    creators: string[];
    yearStarted: string;
    yearEnded: string;
    status: string;

    constructor(data: any) {
        super(data);

        this.creators = data.creators;
        this.yearStarted = data.year_started || 'unknown';
        this.yearEnded = data.year_ended || 'not yet';
        this.status = data.status;
    }
}

export default TVShow;