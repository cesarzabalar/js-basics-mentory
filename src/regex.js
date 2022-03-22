const getAsinFromString = (input) => {
	const asinRegex = /\w{10}/g;
	const match = asinRegex.exec(input);
	return match ? match[0] : input.split('-')[1];
};

console.log(getAsinFromString('001-B07NRT9GYG-No-8'));
