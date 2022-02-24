async function myFunction(param) {
    return 'Hello ' + param
}

const myFunction2 = async ({name}) => {
    return 'Hello ' + name
}

console.log(myFunction('Camilo'))
console.log(myFunction2({name: 'Jorge', age: 25}))

// map
const numbers = [1,2,3,4,5,6,7,8,9]
function double(arrayNumbers) {
    return arrayNumbers.map(myCallback)
}

//template literals
function myCallback(number, index) {
    return `index ${index}: ${number * 2}`
}

console.log(numbers)
console.log(double(numbers))
