var fs = require('fs');

fs.unlink('./stuff1/writeMe.txt', function() {
	fs.rmdir('stuff1', (err) => {
		if (err) throw err;
		console.log("Deleted file");

	});
});