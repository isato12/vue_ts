//console.log("inicio");

//new Promise ((resolve,reject) => {
  //  console.log("cuerpo de la promesa");
//setTimeout(() => {
    //resolve("Si pago")

    //reject("No pago")
//}, 2000);
//}).then((mensaje) => console.log(mensaje))
//.catch((errorMensaje) => console.warn(errorMensaje))
//.finally(() => console.log("finalizo el promise"))


//console.log("fin");

//Las **promesas** en JavaScript y TypeScript son una forma de manejar operaciones asíncronas, como leer archivos, hacer peticiones HTTP, o esperar un temporizador.

//### ¿Qué es una promesa?

//Una promesa es un objeto que representa un valor que puede estar disponible ahora, en el futuro, o nunca. Tiene tres estados:

//- **Pendiente** (`pending`): La operación aún no terminó.
//- **Resuelta** (`fulfilled`): La operación terminó exitosamente.
//- **Rechazada** (`rejected`): La operación falló.

//### Ejemplo básico

//````typescript
//const promesa = new Promise((resolve, reject) => {
  //setTimeout(() => {
  //  resolve("¡Éxito!");
    // o puedes usar reject("Error") para simular un fallo
//  }, 1000);
//});

//promesa
  //.then(resultado => console.log(resultado)) // Se ejecuta si la promesa se resuelve
  //.catch(error => console.error(error))     // Se ejecuta si la promesa se rechaza
//  .finally(() => console.log("Finalizó la promesa")); // Se ejecuta siempre

  //### ¿Por qué usar promesas?

//Las promesas permiten escribir código asíncrono de forma más clara y evitar el "callback hell" (anidación excesiva de funciones).

//### Gotchas

//- Una promesa solo puede resolverse o rechazarse una vez.
//- Si olvidas el `.catch`, los errores pueden pasar desapercibidos.
//- Puedes encadenar promesas usando `.then`.



