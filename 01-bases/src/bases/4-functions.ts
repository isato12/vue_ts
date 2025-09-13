/**
 * Ejemplo básico de funciones en TypeScript
 */

// Declaración de una función simple que suma dos números
function sumar(a: number, b: number): number {
    return a + b;
}

// Uso de la función sumar
const resultado = sumar(5, 3); // resultado = 8

console.log('Resultado de la suma:', resultado);

// Función con parámetro opcional
function saludar(nombre: string, saludo?: string): string {
    // Si saludo no se proporciona, usa un valor por defecto
    return `${saludo ?? 'Hola'}, ${nombre}!`;
}

const mensaje1 = saludar('Ana'); // "Hola, Ana!"
const mensaje2 = saludar('Luis', 'Buenos días'); // "Buenos días, Luis!"

console.log(mensaje1);
console.log(mensaje2);

// Función flecha (arrow function)
const multiplicar = (x: number, y: number): number => x * y;

const producto = multiplicar(4, 6); // producto = 24
console.log('Producto de la multiplicación:', producto);

// Función con valor por defecto en parámetro
function elevar(base: number, exponente: number = 2): number {
    return Math.pow(base, exponente);
}

const cuadrado = elevar(5); // cuadrado = 25
const cubo = elevar(2, 3); // cubo = 8
console.log('Cuadrado:', cuadrado);
console.log('Cubo:', cubo);

// Función que retorna void (no retorna nada)
function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}

mostrarMensaje('¡Aprendiendo funciones en TypeScript!');

//problemas frecuentes que debemos evitar es por ejemplo al crear una funcion con parametros, es recomendable proporcionar el tipo de dato que se espera recibir, ya que si no lo hacemos, Typescript asignara el tipo any por defecto y esto puede ocasionar errores en tiempo de ejecucion

function getPerson(name) {
    return `El nombre de la persona es ${name}`;
}

//La manera correcta de hacerlo es colocando el tipo de dato

function getPerson2(name: string): string {
    return `El nombre de la persona es ${name}`;
}
console.log(getPerson('Pedro'));
console.log(getPerson2('Juan'));

//funciones anonimas
const miFuncion = function(a: string): string {
    return `Hola ${a}`;
}
console.log(miFuncion('Mundo'));


//funciones flecha
const miFuncionFlecha = (a: string): string => `Hola ${a}`;
console.log(miFuncionFlecha('Mundo con flecha'));   

//funcion de flecha en una linea
const miFuncionFlecha2 = (a: string): string => `Hola ${a}`; console.log(miFuncionFlecha2('Mundo con flecha en una linea'));

//funciones flecha que devuelven objetos debes de prestar atencion en la documentación
const crearObjeto = (nombre: string, edad: number) => ({ nombre, edad });
console.log(crearObjeto('Carlos', 30));

const heroes = [
    { id:1,name: 'Superman', vuela: true,novia:true },
    { id:2,name: 'Robin', vuela: false },
    { id:3,name: 'Aquaman', vuela: false },
]
//funcion flecha con find que al colocar signos de interrogacion nos ayuda a evitar errores en tiempo de ejecucion ya que si el objeto o la llave y valor de uno no existe no se rompe la aplicacion
const hero = heroes.find((h) => h.id  === 2);
console.log(hero?.name?.toUpperCase());

export{}; 