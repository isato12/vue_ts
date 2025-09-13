

//La desestructuración nos permite extraer datos de un objeto o arreglo y asignarlos a variables individuales de una manera más sencilla y legible de la siguiente manera.
export const person={
    firstName: 'John',
    lastName: 'Wick',  
    age:30
}

const {firstName, lastName} = person;
console.log(firstName, lastName);

//Pero cuando no sabes que propiedades tiene un objeto puedes usar el operador rest para agrupar las propiedades restantes en un nuevo objeto.
const {age, ...rest} = person;
console.log(age);
console.log(rest);

//y typeScript nos permite con interfaces definir la estructura de un objeto que es como si esyuvieras creando clases en otro lenguaje de programación.Ademas en esta funcion se puede aplicar para cuando necesites que un objeto no tenga algun elemento colocando el signo de interrogacion en la propiedad que no es obligatoria.

interface Hero{
    firstName: string;
    age: number;
    codeName: string;
    powers?: string;
}

//se declara asi:
const hero: Hero = {
    firstName: 'Clark',
    age: 500,
    codeName: 'Superman',
    powers: 'Super strength'
}
//y podemos desestructurar el objeto hero de la siguiente manera:
const {codeName, ...other} = hero;
console.log(codeName);
console.log(other);