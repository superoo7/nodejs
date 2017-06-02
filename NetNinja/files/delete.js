var fs = require('fs');

// Delete
// Asynchronous
fs.unlink('writeMe.txt', (err) => {
	if (err) throw err;
	console.log("Deleted");
}); // can only delete (need to be exist)

// Synchronous
// Create Directories
fs.mkdirSync('stuff1');
// Delete Directories
fs.rmdirSync('stuff1');

// Asynchronous
fs.mkdir('stuff1', function() {
	console.log('Done creating');
	fs.readFile('README.txt','utf8', function(err, data) {
		fs.writeFile('./stuff1/writeMe.txt', data, (err) => {
			if (err) throw err;
			console.log('It is saved!');
		});
	});
});



