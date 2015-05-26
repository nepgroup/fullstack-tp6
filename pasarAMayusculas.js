var fs = require('fs'); 
var nameFile = process.argv[2];
var readFile = fs.createReadStream(nameFile); 
var writeFile = fs.createWriteStream('tempMayus.txt');

readFile.setEncoding('utf8');

readFile.on('data', function(chunk) { 
	for (var i = 0; i < chunk.length; i++) {		
		if (["a", "e", "i", "o", "u"].indexOf(chunk[i]) !== -1){
			writeFile.write(chunk[i].toUpperCase());
		} else{
			writeFile.write(chunk[i]);
		};
	};
});

readFile.on('end', function() { 
  console.log("Successfully received data");
});