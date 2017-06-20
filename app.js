const express = require('express');
const cors = require('cors');
const knex = require('./db/connection');
const queries = require('./db/queries');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
	res.send('get route is working');
});

app.listen(port, () => {
	console.log(`API listening on port ${port}`);
});
