
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('appointments', function(t) {
      t.integer('salesId')
        .unsigned()
        .references('id')
        .inTable('sales')
    })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('appointments', function(t) {
      t.dropForeign('salesId')
       .dropColumn('salesId')
    })
};
