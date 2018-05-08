
exports.up = function(knex, Promisebl) {
  return knex
  	.schema
  	.createTable('appointments', function(t) {
  		t.increments();
  		t.text('customerReview');
  		t.integer('customerRate');
  		t.string('pictures')
  	});
};

exports.down = function(knex, Promise) {
  return knex
  	.schema
  	.dropTableIfExists('appointments')
};
