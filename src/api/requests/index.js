module.exports = (serviceName) => {
	switch (serviceName) {
		case 'http':
			return require('./httpRequest');
		case 'fetch':
			return require('./fetchRequest');
		default:
			break;
	}
};
