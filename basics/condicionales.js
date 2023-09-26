//Condicionales JavaScript
//if (exp) {Body}
const age = 18;
if(age >=18);{ 
console.log('Es Mayor');
}
// if (exp) {Body} else {Body}
if(age>=18){
    console.log('Es Mayor');
    }else{
    console.log('Es Menor');
}

// if ternario (exp)? true: false;
(age>=18)? console.log('Es Mayor'): console.log('Es Menor');
(age>=18)?
    console.log('Es Mayor'):
    console.log('Es Menor');
// if (exp) {} else if {exp} {} else {}
const ppt = Math.ceil(Math.random()*3); 
if(ppt == 1){
    console.log('Cayó pidra');
}else if(ppt == 2){
    console.log('Cayó papel');
}else if(ppt == 3){
    console.log('Cayó tijera');
}else{}

// switch / case
const day = Math.ceil(Math.random() * 7);
switch(day){
    case 1:
        console.log('Es Domingo');
        break;
    case 2:
         console.log('Es Lunes');
        break;  
    case 3:
        console.log('Es Martes');
        break;
    case 4:
        console.log('Es Miércoles');
        break;
    case 5:
        console.log('Es Jueves');
        break;
    case 6:
         console.log('Es Viernes');
         break;
    case 7:
        console.log('Es Sábado');

}



// Thrurty and flasy
//Distintos tipos de datos evaluados 
// 0 ---> false
// '' ---> false
// 'algo'-> true

let apples = 0;
if (apples > 0){
    console.log('Tenemos ${apples} manzanas');
    }else{
    console.log('No tenemos manzanas');
}
apples = 10;
if(apples){
    console.log('Tenemos ${ apples } manzanas');
    }else{
    console.log('No tenemos manzanas');
}

let userLoggeado = '';
let usuarioActual;
userLoggeado?
usuarioActual = userLoggeado:
usuarioActual = 'Invitado';

console.log(usuarioActual);

userLoggeado = 'Frank';

usuarioActual = userLoggeado || 'Invitadoo';
console.log(usuarioActual);