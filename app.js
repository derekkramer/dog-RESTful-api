const express = require('express');
const cors = require('cors');
const knex = require('./db/connection');
const queries = require('./db/queries');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	queries.getAllDogs()
	.then((dogs) => {
		res.json({
			status: 'success',
			data: dogs
		});
	})
	.catch((err) => {
		res.json({
			status: 'failure',
			error: err
		});
	});
});

app.post('/', (req, res) => {
	queries.postDog(req.body)
	.then((id) => {
		res.redirect(`/${id}`);	
	})
	.catch((err) => {
		res.json({
			status: 'failure',
			error: err
		});
	});
});

app.get('/:id', (req, res) => {
	queries.getDog(req.params.id)
	.then((dog) => {
		if(!dog.length){
			throw 'Dog not found!';
		}

		res.json({
			status: 'success',
			data: dog
		});
	})
	.catch((err) => {
		res.json({
			status: 'failure',
			error: err
		});
	});
});

app.patch('/:id', (req, res) => {
	queries.updateDog(req.params.id, req.body)
	.then((dogId) => {
		res.json({ status: 'success' });	
	})
	.catch((err) => {
		res.json({
			status: 'failure',
			error: err
		});
	});	
});

app.delete('/:id', (req, res) => {
	queries.deleteDog(req.params.id)
	.then(() => {
		res.json({ status: 'success' });
	})
	.catch((err) => {
		res.json({
			status: 'failure',
			error: err
		});
	});
});

app.listen(port, () => {
	console.log(`API listening on port ${port}`);
});
