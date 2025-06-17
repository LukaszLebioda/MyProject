const print = (name) => {
	const result = `Hello ${name}!`;
	return result;
};

// we have to export the function like this
// to test it later with JEST
module.exports = print;
