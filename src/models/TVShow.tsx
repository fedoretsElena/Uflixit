import Media from "./Media";
import { MediaType } from "./MediaFactory";

class TVShow extends Media {
    creators: string[];
    yearStarted: string;
    yearEnded: string;
    status: string;

    constructor(data: any) {
        super(data, MediaType.TVShow);

        this.creators = data.creators;
        this.yearStarted = data.year_started || "unknown";
        this.yearEnded = data.year_ended || "not yet";
        this.status = data.status;
    }
}

export default TVShow;
