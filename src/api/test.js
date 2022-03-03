const config = require('./requests/config')
const request = require('./requests')('fetch');

const requestConfig = {
    ...config,
    url:'https://api.tvmaze.com/search/shows?q=girls'
}

request(requestConfig)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err.message);
    })