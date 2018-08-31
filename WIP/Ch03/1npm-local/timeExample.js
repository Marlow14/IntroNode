var moment = require('moment');
    console.log(moment().format('MM-DD-YYYY'));
    console.log(`from now to 1/1/2011 was`, moment("20110101", "YYYYMMDD").fromNow(), `years ago.`);