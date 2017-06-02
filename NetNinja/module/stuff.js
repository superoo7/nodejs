var counter = function(arr) {
	return 'There are ' + arr.length + ' elements in the array';
};

var adder = function(a,b) {
	return `The sum of ${a} and ${b} is ${a+b}`;
};

var pi = 3.142

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
	counter: counter,
	adder: adder,
	pi: pi
};
