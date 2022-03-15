'use strict';

function myPromise(status = true) {
    return new Promise(function(resolve, reject){
        status && resolve('success');
        reject('fail');
    });
}

myPromise(false)
    .then(data => {
        console.log(data);
    })
    .catch(onFailure);

function onFailure(err){
    console.log(err);
}
