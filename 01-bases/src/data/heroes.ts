//El interface es una estructura que define la forma de un objeto o de una clase
export interface Hero{
    id:number,
    name:string,
    owner:Owner
}

//Un type es una forma de definir un alias para un tipo de dato
//En este caso, Owner solo puede ser 'DC' o 'Marvel' Es como personalizar un tipo de dato
export type Owner = 'DC' | 'Marvel';


const heroes: Hero []= [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


export const owners = ['DC','Marvel'];

export default heroes;