import axios, { AxiosResponse } from 'axios';

axios.defaults.headers.common = {
    'X-RapidAPI-Key': process.env.REACT_APP_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_HOST,
    'Access-Control-Allow-Origin': '*'
};

axios.interceptors.response.use(function (config: AxiosResponse) {
    return config.data.result;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
