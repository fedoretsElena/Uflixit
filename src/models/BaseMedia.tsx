export interface IBaseMedia {
    id: string;
    image?: string;
    title?: string;
    imdb_id?: string;
}

class BaseMedia {
    id: string;
    title: string;
    image: string;

    constructor(data: IBaseMedia) {
        this.id = data.imdb_id || data.id;
        this.image = data.image || '';
        this.title = data.title || '';
    }
}

export default BaseMedia;