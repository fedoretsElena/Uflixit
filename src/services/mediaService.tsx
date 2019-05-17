import axios, { AxiosRequestConfig } from 'axios';

import ApiConfig from '../core/ApiConfig';
import Movie from '../models/Movie';
import TVShow from '../models/TVShow';
import BaseMedia, { IBaseMedia } from '../models/BaseMedia';
import MediaFactory, { MediaType } from '../models/MediaFactory';

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

    search(config: AxiosRequestConfig): Promise<any> {
        const requests = [axios.get(this.prepareApiPath(ApiConfig.getMediaSearchPath, '', MediaType.Movie + 's'), config),
                          axios.get(this.prepareApiPath(ApiConfig.getMediaSearchPath, '', MediaType.TVShow + 's'), config)];

        return axios.all(requests)
            .then(axios.spread((movies: IBaseMedia, tvShows: any) => {
                // Both requests are now complete
                return axios.all([this.getPosters(this.prepareSearchRes(movies), MediaType.Movie),
                    this.getPosters(this.prepareSearchRes(tvShows), MediaType.TVShow)])
                    .then(res => [...res[0], ...res[1]]);
            }));
    }

    private getPosters(media: IBaseMedia[], type: MediaType): Promise<BaseMedia[]> {

        return axios.all(media.map(item => this.getPoster(item, type)))
            .then((res: string[]) => {

                res.forEach((item, index) => {
                    media[index].image = item;
                });

                return media.map(i => new BaseMedia(i, type));
            });
    }

    private getPoster(media: IBaseMedia, type: MediaType): Promise<any> {
        return axios.get(this.prepareApiPath(ApiConfig.getMediaPosterPath, media.id, type))
            .catch(() => media.image);
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

    private prepareSearchRes(media: IBaseMedia | IBaseMedia[]): BaseMedia[] {
        let result: IBaseMedia[] = Array.isArray(media) ? media : [media];

        return result.map((item: IBaseMedia) => new BaseMedia(item, MediaType.Another));
    }
}

export default MediaService;