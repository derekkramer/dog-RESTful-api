const knex = require('./connection');

function getAllDogs(){
	return knex('dogs').select();
}

function getDog(id){
	return knex('dogs').select().where('id', id);
}

function postDog(dog){
	return knex('dogs').returning('id').insert(dog);
}

function updateDog(id, dog){
	return knex('dogs').where('id', id).update(dog);
}

function deleteDog(id){
	return knex('dogs').where('id', id).del();
}

module.exports = {
	getAllDogs,
	getDog,
	postDog,
	updateDog,
	deleteDog
};
