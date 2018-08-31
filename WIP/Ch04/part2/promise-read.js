const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

Promise.try(() => {
	return fs.readFileAsync("input5.txt");
}).then((data) => {
	console.log(`Asynchronous read: ${data.toString()}`);
}).catch((err) =>{
    console.log('The error is...', err);
});