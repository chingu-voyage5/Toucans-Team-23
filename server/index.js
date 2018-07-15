const express = require("express");
const fs = require('fs');
let jsn = require('./userData.json');



const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(__dirname + '/public'));
// logger
app.use((req, res, next) => {
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`;

	console.log(log);
	fs.appendFile('server.log', log + '\n', (err) => {
		if (err) {
			console.log(`unable to append to server.log`);
		}
	})
	next();
});



app.post('/user', (req, res) => {
	res.json(jsn)
});


app.get('/', function (req, res) {
	res.render('public/index.html');
});


app.get('*', (req, res) => {
	return res.json({
		msg: "404 NOT FOUND"
	})
});

app.listen(port, () => {
	console.log(`server is up and running on PORT ${port}`);
});