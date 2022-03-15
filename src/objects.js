// Inmutable
const person = {
    name: 'Jorge',
    lastName: 'Caro',
    address: {
        country: 'Colombia',
        City: 'Cali'
    }
};




const person2 = Object.assign({ lastName: 'Gonzalez' }, person, { profession: 'dev' });

// spread operator
const person3 = {
    ...person2,
    lastName: 'Gonzalez',
    languages: ['js', 'react', 'nodejs']
};

// console.log(person)
// console.log(person2)
// console.log(person3)

const { name, lastName } = person3;

const array = [2, 4, 6, 8];
const [ saveDB, sendEmail  ] = array;

function getPerson({name, lastName}){
    console.log('name: ', name);
    console.log('lastName: ', lastName);
}


function getPerson2(name1, name2, name3, name4){
    console.log('name1: ', name1);
}

const arrayParams = ['cesar','camilo','aleja','jorge'];
getPerson2(...arrayParams);
