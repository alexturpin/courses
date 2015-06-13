var express = require('express'),
	fs = require('fs'),
	path = require('path'),
	md = require('markdown-it')();

var app = express();

app.get('/:file', function (req, res) {
	fs.readFile(path.join(__dirname, req.params.file), "utf-8", function(err, data) {
		if (err) return res.status(500).end(err.toString());

		res.send(md.render(data));
	});
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
