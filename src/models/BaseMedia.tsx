import { MediaType } from './MediaFactory';

export interface IBaseMedia {
    id: string;
    type?: MediaType;
    image?: string;
    title?: string;
    imdb_id?: string;
}

class BaseMedia {
    id: string;
    title: string;
    image: string;
    type: MediaType;

    constructor(data: IBaseMedia, type: MediaType) {
        this.id = data.imdb_id || data.id;
        this.image = data.image || 'https://cdns.directv.com/cms2/my_directv/general/lg__celebrity_generic.jpg';
        this.title = data.title || '';
        this.type = type;
    }
}

export default BaseMedia;