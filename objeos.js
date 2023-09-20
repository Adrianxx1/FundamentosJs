//Objetos es una coleccion de datos 
// a través de key/value llave/valor

const alumno ={
    name: 'Adrian',
    age: 21,
    city: 'Milan',
    califications: [10, 10,8],
    career: 'TIADSM',
    'last name': 'Jobs',
    'gender': 'Male',
}

console.log(alumno);
console.log(alumno.name);
console.log(alumno.city);
console.log(alumno['califications']);
console.log(alumno['last name']);

alumno.height = 1.75;
console.log(alumno);

const group ={
    name: '4a TIADSM',
    career: 'TIADSM',
    classroom: 'Lab Redes',
    subject:['Aplicaciones', 'Modelo', 'Data Bases'],
    alumns: [alumno, alumno, alumno]
}

console.log(group);
console.log(group.subjects[1]);
console.log(group.alumns[0].califications[1]);