//Varsiones anteriores a ES6 era var
var miVariable;

//de ES6 en adelante 
// const y let

// const declara constantes, no permite reasignacion
// Al crearla debe inicializarse 
const PI = 3.14;
//PI = 3.25;

// let declara variables
// permite reasignacion
// se puede declar y lurgo inicializar
// Js detecta automoticamente el tipo de dato

let firstname;
console.log(firstname);
firstname = 'Peter Parker';
console.log(firstname);
console.log(typeof(firstname));

firstname = 18;
console.log(typeof(firstname));
