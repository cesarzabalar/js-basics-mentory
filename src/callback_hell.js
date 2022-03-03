function hello(name, myCallback) {
    setTimeout(function() {
        console.log('Hello, ' + name)
        myCallback(name)
    }, 1000)
}

function speak(speakCallback) {
    setTimeout(function() {
        console.log('Bla bla bla bla')
        speakCallback()
    }, 1000)
}

function bye(name, otherCallback) {
    setTimeout(function() {
        console.log('Bye, ' + name)
        otherCallback()
    }, 1000)
}


console.log('start process...')

hello('Cesar', function(name) {
    speak(function() {
        bye(name, function() {
            console.log('i am ending.....')
        })
    })
})

console.log('end process...')


// 2. Callback hell
console.log('start process...')

hello('Cesar', function(name) {
    speak(function() {
        speak(function() {
            bye(name, function() {
                console.log('i am ending.....')
            })
        })
    })
})

console.log('end process...')

// Refactoring. callback hell
hello('Cesar', function(name) {
    bye(name, function() {
        console.log('i am ending.....')
    })
})