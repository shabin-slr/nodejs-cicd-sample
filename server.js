const express = require("express");
const routes = require("./app/routes");
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', routes);

var server = app.listen(parseInt(process.env.PORT, 10) || 3000, () => {
	console.log("App running");
});

module.exports = server;

