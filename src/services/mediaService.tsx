import axios from 'axios';

import ApiConfig from '../core/ApiConfig';
import MediaFactory, { MediaType } from '../models/MediaFactory';
import BaseMedia, { IBaseMedia } from '../models/BaseMedia';
import Movie from '../models/Movie';
import TVShow from '../models/TVShow';

export class MediaService {

    getPopularShows(): Promise<BaseMedia[]> {

        return axios.get(ApiConfig.getPopularTVShowsPath)
            .then((ids: any) => this.convertToObj(ids))
            .then((res: any) => this.getPosters(res.slice(0, 10), MediaType.TVShow));
    }

    getWantedMoviesIds(): Promise<BaseMedia[]> {

        return axios.get(ApiConfig.getWantedMoviesPath)
            .then((ids: any) => this.convertToObj(ids))
            .then((res: any) => this.getPosters(res, MediaType.Movie));
    }

    getDetail(id: string, location: { pathname: string }): Promise<Movie | TVShow> {
        const type = location.pathname.indexOf('movie') !== -1 ? MediaType.Movie : MediaType.TVShow;

        return axios.get(this.prepareApiPath(ApiConfig.getMediaDetailsPath, id, type))
            .then(data => {
                return new MediaFactory(type, data).getMedia();
            });
    }

    search(params: URLSearchParams,
           type: MediaType = MediaType.TVShow): Promise<any> {

        return axios.get(this.prepareApiPath(ApiConfig.getMediaSearchPath, '', type + 's'), {params})
            .then((res) => Array.isArray(res) ? res : [res])
            .then((res: any) => res.map((i: IBaseMedia) => new BaseMedia(i)))
            .then((res: BaseMedia[]) => this.getPosters(res))
    }

    private getPosters(media: IBaseMedia[], type: MediaType = MediaType.TVShow): Promise<BaseMedia[]> {

        return axios.all(media.map(item => this.getPoster(item.id, type)))
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

    private prepareApiPath(path: string, id: string, type: MediaType | string): string {
        return path.replace('{id}', id)
                   .replace('{type}', type);
    }

    private convertToObj(ids: string[]): IBaseMedia[] {
        return ids.map((id: string) => {
            return {id};
        });
    }
}

export default MediaService;