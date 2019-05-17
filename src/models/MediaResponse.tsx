import BaseMedia  from './BaseMedia';

export default interface IMediaResponse {
    media: BaseMedia[],
    pages: {
        length: number,
        curr: number
    }
}
