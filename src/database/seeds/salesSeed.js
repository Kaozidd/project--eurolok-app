
const data = [
  {
    pickUpDay: 'monday',
    total: 270
  },
  {
    pickUpDay: 'thursday',
    total: 200
  }
]

exports.seed = function(knex, Promise) {
  return knex('sales').del()
    .then(function () {
      return knex('sales').insert(data);
    });
};
