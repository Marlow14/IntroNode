const express = require("express");
const path = require("path");
const config = {port: 3745} ;

let app = express();

app.use(function (req, res, next) {
    req.message = 'In middleware: line 16<br />';
   
    next();
});

// refer to router
app.use(require("./routes/index.js"));
  
app.listen(config.port, () => {
	console.log(`Listening on port http://localhost:${config.port}`);
});
