const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (Math.random() < 0.5) {
			return resolve('hello world');
		} else {
			reject(new Error('hello error'));
		}
	}, 200);
});

promise
	.then(msg => msg.toUpperCase())
	.then(msg => console.log("message :", msg))
	.catch(err => console.log("error: ", err))