export const person = {
    firstName: 'John',
    lastName: 'Wick',  
    age: 30,
    address: {
        country: 'USA',
        city: 'New York',
        zipCode: '10001',
        lat: 40.7128,
        lng: -74.0060,
    }, 
}
//cambiar el país de la dirección sep uede cambiar cualquier elemento del objeto
person.address.country = 'Canada';

//No se puede cambiar el nombre de la variable person
//person = {}; // Esto causaría un error porque person es una constante

// Se puede agregar una nueva propiedad al objeto
//esto marca error en ts 
//person.email = 'algun@correo.comm';

// Se puede eliminar una propiedad del objeto
//esto marca error en ts 
//delete person.age;

// Se puede cambiar el valor de una propiedad existente
person.firstName = 'Jane';

console.log(person);

//objetos que pasan por referencia
const person2 = person;
person2.firstName = 'Alice'; // Cambia también person.firstName

// Ambos objetos ahora apuntan al mismo lugar en memoria
// Por lo tanto, cualquier cambio en uno afectará al otro

console.log(person);
console.log(person2);

const person3 = { ...person }; // Crea una copia superficial de person
person3.firstName = 'Bob'; // Cambia solo person3.firstName

// person sigue siendo el mismo, ya que person3 es una copia
console.log(person);
console.log(person3);   

const person4 = structuredClone(person); // Crea una copia profunda de person
person4.firstName = 'Charlie'; // Cambia solo person4.firstName

// person sigue siendo el mismo, ya que person4 es una copia profunda y es la forma correcta de clonar objetos
console.log(person);
console.log(person4);

// Exportar el objeto person para que pueda ser utilizado en otros archivos
//export default person;/