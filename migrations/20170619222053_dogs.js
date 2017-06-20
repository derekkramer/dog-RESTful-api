
exports.up = function(knex, Promise) {
	return knex.schema.createTable('dogs', (table) => {
		table.increments();
		table.string('breed').notNullable();
		table.string('size').notNullable();
		table.string('frequency').notNullable();
		table.string('image_url', 2000).notNullable();
		table.timestamp('date_time').defaultTo(knex.fn.now());
	}); 
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('dogs');
};
