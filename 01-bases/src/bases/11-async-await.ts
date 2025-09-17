

// export const getImage = async ()=>{

import type { GIFResponse } from "../interfaces/gif.response";
import api from "./10-axios";

//     return 'https://url-de-mi-sitio-web/imagen.png';
// }

// Forma larga de hacerlo con promesas
// export const getImagePromise = (): Promise<string> => {
//     return new Promise((resolve) => {
//         resolve('https://url-de-mi-sitio-web/imagen.png');
//     });
// };


// console.log('async', getImage());
// console.log('promise', getImagePromise());





export const getImage = async () =>{
try {
    const resp = await api.get<GIFResponse>('/random')
    return resp.data.data.images.original.url;

}

catch (error) {
    throw 'url no encotrado'
}
}

getImage().then((url) => console.log({url}))
.catch(err => console.log('Error de mi promesa', err))
