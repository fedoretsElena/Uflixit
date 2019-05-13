import BaseMedia from './BaseMedia';

interface ITVShow {
}

class TVShow extends BaseMedia {
    creators: string[];
    yearStarted: string;
    yearEnded: string;
    status: string;

    constructor(data: any) {
        super(data);
        console.log(data);
        this.creators = data.creators;
        this.yearStarted = data.year_started || 'unknown';
        this.yearEnded = data.year_ended || 'not yet';
        this.status = data.status;
    }
}

export default TVShow;