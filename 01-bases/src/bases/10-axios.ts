import axios from "axios";
import type { GIFResponse } from "../interfaces/gif.response";

const apikey = 'F2a4KSsNsukH6NJYmM8E1G8fW21zhXJh';

const api = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apikey
    }
});


export default api;

api.get<GIFResponse>('/random')
    .then(resp => console.log(resp.data.data.images.original.url))
    .catch(err => console.warn(err))