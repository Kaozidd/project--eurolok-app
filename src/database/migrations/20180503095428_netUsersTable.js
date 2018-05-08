
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('netUsers', function(t) {
    	t.increments();
    	t.string('name');
    	t.string('email');
    	t.string('password');
    	t.bigint('phone');
    	t.text('bio');
    	t.string('picture');
    	t.integer('roleId')
    });
};

exports.down = function(knex, Promise) {
  return knex
  	.schema
  	.dropTableIfExists('netUsers')
};
