var express = require('express');
var app = express();
var morgan = require('morgan');
var users = [
	{id: 1, name: 'alice'},
	{id: 2, name: 'bek'},
	{id: 3, name: 'chris'}
];

app.use(morgan('dev'));

app.get('/users', function(req, res){
	req.query.limit = req.query.limit || 10;
	const limit = parseInt(req.query.limit, 10); // "2"를 int의 10진수로 변환
	if (Number.isNaN(limit)){
		return res.status(400).end();
	}
	res.json(users.slice(0, limit));
});

app.listen(3000, ()=>{
	console.log('Example app listening on port 3000!');
})

module.exports = app;