function iAmAsync(name) {
    return new Promise(function(resolve, reject) {

        setTimeout(function() {
            resolve(name)
        }, 1000)
        
    })
}

async function iAmAsync2() {
    try {
        const response = await iAmAsync('Jorge');
        console.log('hello ' + response)
    } catch(err) {
        //
    }
}

iAmAsync2()

// iAmAsync('Camilo')
//     .then((response) => {
//         console.log('hello ' + response)
//     })
//     .catch((err) => {
//         console.error(err.message)
//     })


// iAmAsync('Camilo')
//     .then(resolveDone)
//     .catch((err) => {
//         console.error(err.message)
//     })

// function resolveDone(response) {
//     console.log('hello ' + response)
// }


