const fs = require("fs");

try {
	const file = process.argv[2];

	const content = fs.readFileSync(file).toString();

	const lines = content.split("\n").length;
	console.log(lines);
} catch (err) {
	console.log(err);
}
/** Asi se ejecuta */
/** node sync-files.js naranja.txt  */