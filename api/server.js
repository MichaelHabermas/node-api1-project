const express = require('express');
// const
const User = require('./users/model');
const server = express();

// solves GET users test
server.get('/api/users', (req, res) => {
	User.find()
		.then(users => {
			// throw new Error('aaaaaahhhhhhhhh!!!!!');
			// console.log(users);
			res.json(users);
		})
		.catch(err => {
			res.status(500).json({
				message: 'error getting users',
				err: err.message,
				stack: err.stack
			});
		});
});

// solves GET users  by ID test
server.get('/api/users/:id', (req, res) => {
	User.findById(req.params.id)
		.then(user => {
			console.log(user);
			res.json(user);
		})
		.catch(err => {
			res.status(500).json({
				message: 'error getting user',
				err: err.message,
				stack: err.stack
			});
		});
});

server.use('*', (req, res) => {
	res.status(404).json({
		message: 'not found'
	});
});

module.exports = server;
