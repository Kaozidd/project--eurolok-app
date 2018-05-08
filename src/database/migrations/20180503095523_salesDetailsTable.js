
exports.up = function(knex, Promise) {
  return knex
  	.schema
  	.createTable('salesDetails', function(t) {
      t.increments();
      t.integer('category');
  		t.string('name');
      t.string('image');
  		t.text('info');
  		t.integer('price');
  		t.integer('quantity');
  	})
};

exports.down = function(knex, Promise) {
  return knex
  	.schema
  	.dropTableIfExists('salesDetails')
};
