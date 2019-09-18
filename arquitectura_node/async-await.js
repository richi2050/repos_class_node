const promiseFunction = () => new Promise((resolve, reject) => {
	setTimeout(() => {
		if (Math.random() < 0.5) {
			return resolve('hello world');
		} else {
			reject(new Error('hello error'));
		}
	}, 200);
});

async function asyncAwait() {
	try {
		const msg = await promiseFunction();
		console.log('message:', msg);
	} catch (err) {
		console.log('error: ', err);
	}
}


asyncAwait();