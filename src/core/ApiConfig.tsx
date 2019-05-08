class ApiConfig {

    static API = `https://${process.env.REACT_APP_HOST}/`;

    static getPopularShowsPath = `${ApiConfig.API}tv-shows/popular`;
    static getShowPosterPath = `${ApiConfig.API}tv-show/poster/{id}`;
    static getShowDetailsPath = `${ApiConfig.API}tv-show/details/{id}`;
};

export default ApiConfig;