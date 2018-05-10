exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('user', (t)=>{
    //primary key
    t.increments()

    //Fields
    t.string('name')
    t.string('email').notNullable()
    t.string('password').notNullable()
    t.bigint('phone')
    t.text('bio')
    t.string('picture')
    t.integer('roleId')

    return t
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')
};
