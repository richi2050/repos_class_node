const EventEmmiter = require('events');
class Logger extends EventEmmiter {
	execute(cb){
		console.log("Before");
		this.emit('start');
		cb();
		this.emit('finish');
		console.log("After");
	}
}

const loger  = new Logger();

loger.on('start', ()=> console.log("Starting"));
loger.on('finish', ()=> console.log("Finish"));
loger.on('finish', ()=> console.log("It is Done"));

loger.execute(() => console.log("hola mundo"));