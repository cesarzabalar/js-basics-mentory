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
    //return arrayNumbers.map(function(number){return number*2})
    //return arrayNumbers.map(number => number*2)
    //return arrayNumbers.map(myCallback)

    const array1 = arrayNumbers.find(num => num > 5)
    const array2 = arrayNumbers.findIndex(num => num > 5)
    const array3 = arrayNumbers.filter(num => num > 5)
    // arrayNumbers.reduce()
    // arrayNumbers.some()

    console.log(array1)
    console.log(array2)
    console.log(array3)

}

//template literals
function myCallback(number, index) {
    return `index ${index}: ${number * 2}`
}

// console.log(numbers)
console.log(double(numbers))
