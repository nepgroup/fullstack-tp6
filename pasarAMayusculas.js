var fs = require('fs')
var temp = process.argv[2];
var stream = fs.createReadStream(temp);
var file = ''; 

stream.on('data', function(data) {
	var data = data.toString();
	for (var i = 0; i < data.length; i++) {		
		if (["a", "e", "i", "o", "u"].indexOf(data[i]) !== -1){
			file += data[i].toUpperCase();
		} else{
			file += data[i];
		};
	};
});

stream.on('end', function() {
	fs.writeFile('tempMayus.txt', file, function (err) {
	if (err) throw err;
		console.log('It\'s saved!');
	});
});