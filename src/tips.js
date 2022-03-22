'use strict';

// 1. parsear string a numero
const data = '325.354';

const number = parseFloat(data);
const number2 = +data;
const number3 = Number(data);

console.log(number);
console.log(number2);
console.log(number3);

// 2. convertir a Boolean
const data2 = 100;
const boolean = Boolean(data2);

// double bang operator
const boolean2 = !!data2;

console.log(boolean);
console.log(boolean2);

// 3. convertir a sting

const str = 45886666;
const text = str.toString();
const text2 = `${str}`;
const text3 = String(str);
const text4 = str + '';

console.log(text4);

// 4. ternarios

const result = 7 > 20 ? true : false;
console.log(result);

// 5. operadores de corto circuito (&& ||)
const name = 'camilo';
function greeting(name) {
	console.log(`Hello ${name}`);
}

name && greeting(name);

// ||
const names = '';
function greeting2() {
	console.log('Helloxx');
}

names || greeting2();

// 6. Nullish operator (??)

const myVar = '';
function noData() {
	console.log('the property is null or undefined');
}

myVar ?? noData();

// 7. default params
function foods(breakfast, lunch, dinner = 'something') {}

//  7. optional chaining
const person = {
	name: 'Jorge',
	lastName: 'Caro',
	address: {
		country: 'Colombia',
		City: 'Cali',
	},
};

console.log(person.address?.country?.code);
