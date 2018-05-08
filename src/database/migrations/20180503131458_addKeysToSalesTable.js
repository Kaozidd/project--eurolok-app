
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('sales', function(t) {
      t.integer('customerId')
        .unsigned()
        .references('id')
        .inTable('netUsers')
      t.integer('teamMemberId')
        .unsigned()
        .references('id')
        .inTable('netUsers')
    })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('sales', function(t) {
      t.dropForeign('customerId')
       .dropColumn('customerId')
      t.dropForeign('teamMemberId')
       .dropColumn('teamMemberId')
    })
};
