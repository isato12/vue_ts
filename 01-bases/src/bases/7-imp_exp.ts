/*En TypeScript (y JavaScript ES6), la diferencia entre importar con llaves `{}` y sin ellas tiene que ver con los tipos de exportaciones:

- **Sin llaves**: Importas la **exportación por defecto** del módulo.
- **Con llaves**: Importas una o varias **exportaciones nombradas**.

Gotcha común: 
Si intentas importar una exportación nombrada sin llaves, o la exportación por defecto con llaves, tendrás un error.

*/
import heroes,{type Owner }  from "../data/heroes";
//import type { Owner } from "../data/heroes";


export const getHeroeById = (id: number) => {
   return heroes.find( heroe => heroe.id === id );
}

export const getHeroOwnerById = (owner:Owner) =>{
    return heroes.filter(heroe => heroe.owner === owner);
}

console.log(getHeroeById(1),getHeroOwnerById('DC'));