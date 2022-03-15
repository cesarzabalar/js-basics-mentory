'use strict';
// filesystem or fs module

// __dirname
const file = 'src/samples/myFile.csv';

const fs = require('fs');


function readfile(path, cb) {
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
        }
        // Buffer
        cb(data.toString());
    });
}

function readfile2(path) {
    return new Promise((resolve, reject) => {

        fs.readFile(path, (err, data) => {
            if(err){
                reject(err);
            }
            resolve(data.toString());
        });
    });
}

readfile2(file)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err.message);
    });

//use with callback


// function writeFile(path, content, cb) {
//     fs.writeFile(path, content, function(err) {
//         if(err)
//             console.error('write error')
//     })
// }
