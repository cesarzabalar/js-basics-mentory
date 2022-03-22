const https = require('https');
const { URL } = require('url');

const request = (requestOptions) => {
	const url = new URL(requestOptions.url);
	requestOptions.hostname = url.hostname;
	requestOptions.path = url.pathname + url.search;

	return new Promise((resolve, reject) => {
		let postParams;
		if (requestOptions.body) {
			postParams = requestOptions.body;
			requestOptions.headers['Content-Length'] = Buffer.byteLength(postParams);
		}

		const req = https.request(requestOptions, (res) => {
			let chunks = [];
			let body = '';

			res.on('data', (chunk) => {
				body += chunk;
				chunks.push(chunk);
			});

			res.on('end', () => {
				resolve({
					data: JSON.parse(body),
					statusCode: res.statusCode,
					headers: res.headers,
				});
			});
		});

		req.on('error', (e) => {
			reject(e);
		});

		if (postParams) {
			req.write(postParams, 'utf8');
		}

		req.end();
	});
};

module.exports = request;
