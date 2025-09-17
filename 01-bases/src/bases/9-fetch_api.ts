import type { GIFResponse } from "../interfaces/gif.response";


const apikey = 'F2a4KSsNsukH6NJYmM8E1G8fW21zhXJh';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
    .then((resp) => resp.json())
    .then((body: GIFResponse) => {console.log( body.data.images.original.url); 
    })
    .catch(err => console.warn(err))
