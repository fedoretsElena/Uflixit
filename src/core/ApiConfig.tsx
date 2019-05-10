class ApiConfig {

    static API = `https://${process.env.REACT_APP_HOST}/`;

    static getPopularTVShowsPath = `${ApiConfig.API}tv-shows/popular`;
    static getTVShowPosterPath = `${ApiConfig.API}tv-show/poster/{id}`;

    static getWantedMoviesPath = `${ApiConfig.API}movies/wanted`;
    static getMoviePosterPath = `${ApiConfig.API}movie/poster/{id}`;

    static getMediaDetailsPath = `${ApiConfig.API}{type}/details/{id}`;

};

export default ApiConfig;