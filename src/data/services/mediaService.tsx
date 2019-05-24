import axios, { AxiosRequestConfig } from "axios";

import ApiConfig from "../../core/ApiConfig";
import Movie from "../../models/Movie";
import TVShow from "../../models/TVShow";
import Review from "../../models/Review";
import IMediaResponse from "../../models/MediaResponse";
import BaseMedia, { IBaseMedia } from "../../models/BaseMedia";
import MediaFactory, { MediaType } from "../../models/MediaFactory";
import IReview from "../../models/Review";

class MediaService {
    VISIBLE_ITEMS: number = 10;
    storage: { popularShows: IBaseMedia[] } = {
        popularShows: []
    };

    // TODO: don't like this logic with pagination
    getPopularShows(page: number = 1): Promise<IMediaResponse> {
        const { popularShows } = this.storage;
        const getPosters = (ids: IBaseMedia[]) =>
            this.getPosters(
                this.extractDataFromStorage(popularShows, ids, page),
                MediaType.TVShow
            ).then((media: BaseMedia[]) => {
                return {
                    media,
                    pages: {
                        length: popularShows.length / this.VISIBLE_ITEMS,
                        curr: page
                    }
                };
            });

        return this.storage.popularShows.length >= this.VISIBLE_ITEMS * page
            ? getPosters([])
            : axios
                  .get(ApiConfig.getPopularTVShowsPath)
                  .then((ids: string[] | string | any) =>
                      this.convertToArrWithKeyId(ids)
                  )
                  .then((ids: IBaseMedia[]) => getPosters(ids));
    }

    getWantedMoviesIds(): Promise<BaseMedia[]> {
        return axios
            .get(ApiConfig.getWantedMoviesPath)
            .then((ids: string[] | string | any) =>
                this.convertToArrWithKeyId(ids)
            )
            .then((res: IBaseMedia[]) => this.getPosters(res, MediaType.Movie));
    }

    getDetail(
        id: string,
        location: { pathname: string }
    ): Promise<Movie | TVShow> {
        const type =
            location.pathname.indexOf("movie") !== -1
                ? MediaType.Movie
                : MediaType.TVShow;

        return axios
            .get(this.prepareApiPath(ApiConfig.getMediaDetailsPath, id, type))
            .then(data => {
                return new MediaFactory(type, data).getMedia();
            });
    }

    search(config: AxiosRequestConfig): Promise<any> {
        const requests = [
            axios.get(
                this.prepareApiPath(
                    ApiConfig.getMediaSearchPath,
                    "",
                    MediaType.Movie + "s"
                ),
                config
            ),
            axios.get(
                this.prepareApiPath(
                    ApiConfig.getMediaSearchPath,
                    "",
                    MediaType.TVShow + "s"
                ),
                config
            )
        ];

        return axios.all(requests).then(
            axios.spread((movies: IBaseMedia, tvShows: any) => {
                // Both requests are now complete
                return axios
                    .all([
                        this.getPosters(
                            this.prepareSearchRes(movies),
                            MediaType.Movie
                        ),
                        this.getPosters(
                            this.prepareSearchRes(tvShows),
                            MediaType.TVShow
                        )
                    ])
                    .then(res => [...res[0], ...res[1]]);
            })
        );
    }

    getReviews(
        title: string,
        location: { pathname: string }
    ): Promise<Review[]> {
        const type =
            location.pathname.indexOf("movie") !== -1
                ? MediaType.Movie
                : MediaType.TVShow;

        const params: URLSearchParams = new URLSearchParams({ title });

        return axios
            .get(
                this.prepareApiPath(
                    ApiConfig.getMediaMetacriticsPath,
                    "",
                    type
                ),
                { params }
            )
            .then(
                (
                    data:
                        | {
                              metascore: string;
                              metascore_id: string[];
                              critic_reviews: IReview[];
                          }
                        | any
                ) => {
                    return data.critic_reviews.map(
                        (i: IReview) => new Review(i)
                    );
                }
            );
    }

    private getPosters(
        media: IBaseMedia[],
        type: MediaType
    ): Promise<BaseMedia[]> {
        return axios
            .all(media.map(item => this.getPoster(item, type)))
            .then((res: string[]) => {
                res.forEach((item, index) => {
                    media[index].image = item;
                });

                return media.map(i => new BaseMedia(i, type));
            });
    }

    private getPoster(media: IBaseMedia, type: MediaType): Promise<any> {
        return axios
            .get(
                this.prepareApiPath(
                    ApiConfig.getMediaPosterPath,
                    media.id,
                    type
                )
            )
            .catch(() => media.image);
    }

    private prepareApiPath(
        path: string,
        id: string,
        type: MediaType | string
    ): string {
        return path.replace("{id}", id).replace("{type}", type);
    }

    private convertToArrWithKeyId(ids: string[] | string): IBaseMedia[] {
        if (!Array.isArray(ids)) {
            ids = [ids];
        }

        return ids.map((id: string) => {
            return { id };
        });
    }

    private prepareSearchRes(media: IBaseMedia | IBaseMedia[]): BaseMedia[] {
        const result: IBaseMedia[] = Array.isArray(media) ? media : [media];

        return result.map(
            (item: IBaseMedia) => new BaseMedia(item, MediaType.Another)
        );
    }

    // TODO: bad logic, method isn't pure
    private extractDataFromStorage(
        mediaFromStorage: IBaseMedia[],
        requestedMedia: IBaseMedia[],
        page: number = 1
    ): IBaseMedia[] {
        if (requestedMedia) {
            mediaFromStorage.push(...requestedMedia);
        }

        return mediaFromStorage.slice(
            (page - 1) * this.VISIBLE_ITEMS,
            this.VISIBLE_ITEMS * page
        );
    }
}

export default MediaService;
