//funciones de orden superior
//High order function
/*
funciones que reciben funciones como funciones
*/

const myFunction = () => {
    console.log('Ejecuta Mi Función');
}
myFunction();
const sameFunction = myFunction
sameFunction();

const otherSameFunction = myFunction;
otherSameFunction();

const funOne =() =>{
    console.log('Ejecuta la función One');
}

const funTwo = () =>{
    console.log('Ejecuta la función Two');
    console.log('Holaa ' +username);
}

const funThree = (otherFunction) =>{
    console.log('Incia función 3');
    otherFunction();
    console.log('Termina función 3');
}

funOne();
funTwo('Adrian');
funTwo('John');
funThree(funOne);
funThree(()=> console.log('Soy un Arrow Function' ));
