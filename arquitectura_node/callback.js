const asyncCallback = function (cb) {
	setTimeout(() => {
		if (Math.random() < 0.5) {
			return cb(null, 'hello world');
		} else {
			cb(new Error('hello error'));
		}
	}, 200);
}

asyncCallback((err, msg) => {
	if (err) {
		console.log('message:', err);
	} else {
		console.log('message:', msg);
	}
});