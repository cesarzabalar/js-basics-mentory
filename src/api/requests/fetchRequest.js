const fetch = require('node-fetch');

const request = async(requestOptions) => {
    return fetch(requestOptions.url)
        .then(result => result.json())
        .then(data => {
            return { data };
        })
        .catch(err => {
            throw new Error(err.message);
        });
};

module.exports = request;
