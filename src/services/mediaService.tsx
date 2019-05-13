import axios from 'axios';

import ApiConfig from '../core/ApiConfig';
import MediaFactory, { MediaType } from '../models/MediaFactory';
import BaseMedia, { IBaseMedia } from '../models/BaseMedia';
import Movie from '../models/Movie';
import TVShow from '../models/TVShow';

export class MediaService {

    getPopularShows(): Promise<BaseMedia[]> {

        return axios.get(ApiConfig.getPopularTVShowsPath)
            .then((res: any) => this.getPosters(res.slice(0, 10), MediaType.TVShow));
    }

    getWantedMoviesIds(): Promise<BaseMedia[]> {

        return axios.get(ApiConfig.getWantedMoviesPath)
            .then((res: any) => this.getPosters(res, MediaType.Movie));
    }

    getDetail(id: string, location: { pathname: string }): Promise<Movie | TVShow> {
        const type = location.pathname.indexOf('movie') !== -1 ? MediaType.Movie : MediaType.TVShow;

        return axios.get(this.prepareApiPath(ApiConfig.getMediaDetailsPath, id, type))
            .then(data => {
                return new MediaFactory(type, data).getMedia();
            });
    }

    private getPosters(ids: string[], type: MediaType): Promise<BaseMedia[]> {
        let media: IBaseMedia[] = [...ids.map(id => {
            return {id}
        })];

        return axios.all(ids.map(id => this.getPoster(id, type)))
            .then((res: string[]) => {

                res.forEach((item, index) => {
                    media[index].image = item;
                });

                return media.map(i => new BaseMedia(i));
            });
    }

    private getPoster(id: string, type: MediaType): Promise<any> {
        return axios.get(this.prepareApiPath(ApiConfig.getMediaPosterPath, id, type));
    }

    private prepareApiPath(path: string, id: string, type: MediaType): string {
        return path.replace('{id}', id)
            .replace('{type}', type);
    }

}

export default MediaService;