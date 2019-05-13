class ApiConfig {

    static API = `https://${process.env.REACT_APP_HOST}/`;

    static getPopularTVShowsPath = `${ApiConfig.API}tv-shows/popular`;
    static getWantedMoviesPath = `${ApiConfig.API}movies/wanted`;

    static getMediaDetailsPath = `${ApiConfig.API}{type}/details/{id}`;
    static getMediaPosterPath = `${ApiConfig.API}{type}/poster/{id}`;
    static getMediaSearchPath = `${ApiConfig.API}{type}/search`;

};

export default ApiConfig;