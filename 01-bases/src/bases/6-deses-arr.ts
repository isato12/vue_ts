const superSayayines: string[] = [
    'Goku',
    'Vegeta',
    'Gohan',
    'Trunks',
    'Goten',
    'Broly',
    'Caulifla',
    'Kale',
    'Cabba'
];

//la desestructuracion en los arreglos funciona por posicion y no por nombrepuedes usar palabras o abreviaciones o una letra, se separan por comas
const [g,v,g2,t,go,b,c,k,ca] = superSayayines;


console.log('Super Sayayines', g,v,g2,t,go,b,c,k,ca);

const returnArray = ()=> {
    return ['ABC',123]as const;
}
//as const hace que el tipado sea mas estricto, en este caso letters sera de tipo 'ABC' y numbers de tipo 123
//sin as const letters seria de tipo string y numbers de tipo number
//tambien hace que el arreglo sea readonly, es decir no se puede modificar
//si no usas as const tendras que definir el tipado de la funcion returnArray para que no sea any[]
// const returnArray = (): [string, number] => {
//     return ['ABC',123];

const [letters, numbers] = returnArray();

console.log('Letters', letters.toLowerCase());
console.log('Numbers', numbers);



export {};