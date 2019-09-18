var Sybase = require('sybase');
var logTiming = true;
var javaJarPath = "C:\\Users\\rlugoex\\Documents\\nodejs\\clase_platzi\\streams\\jconn4.jar";
	
var db = new Sybase('169.169.4.23', '3000', 'D_Independencia', 'sybase', 'sybase',logTiming, javaJarPath);
	

db.connect(function (err) {
	if (err) return console.log(err);

	db.query('select * from personas where persona = 150002087', function (err, data) {
		if (err) console.log(err);

		console.log(data);

		db.disconnect();

	});
});