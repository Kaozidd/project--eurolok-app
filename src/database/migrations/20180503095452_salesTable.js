
exports.up = function(knex, Promise) {
  return knex
  	.schema
  	.createTable('sales', function(t) {
  		t.increments();
  		// t.timestamp('createdAt')
  		//  .notNullable()
  		//  .defaultTo(knex.fn.now);
  		t.string('pickUpDay');
  		t.integer('total')
  	});
};

exports.down = function(knex, Promise) {
  return knex
  	.schema
  	.dropTableIfExists('sales')
};
