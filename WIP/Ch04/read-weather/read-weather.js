const weather = require('./weather.json');
console.log(weather);
console.log("******");

var fs = require("fs");


// Asynchronous read
fs.readFile('weather.json', function (err, data) {
    if (err) {
        return console.error(err);
    }

    console.log("Asynchronous read: " + data);
    const dataArray = JSON.parse(data.toString());
    dataArray.forEach(element => {
        console.log('json parse: ', element.day );
    });
});

const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile);

readFileAsync(`${__dirname}/weather.json`, { encoding: 'utf8' })
    .then(contents => {
        const weatherArray = JSON.parse(contents);
        console.log('Promisify array: ', weatherArray);

        weatherArray.forEach(element => {
            console.log('Promisify each: ' + element.day);
        });
    })
    .catch(error => {
        console.log(error);
    });





