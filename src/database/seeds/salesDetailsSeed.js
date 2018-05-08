const data = [
  {
    category: 1,
    name: 'Haircut',
    image: 'null',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi purus, luctus eu pretium vel, malesuada ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vehicula sollicitudin accumsan. Proin ornare ante lacus, at consectetur sem pellentesque vel. Praesent lacus elit, efficitur ut augue ac, iaculis hendrerit leo. Sed egestas purus libero, vel efficitur ante tincidunt in. Vestibulum congue lacus neque, vel convallis justo interdum ac. Nunc non dictum lacus. ',
    price: 90,
    quantity: 2
  },
  {
    category: 1,
    name: 'Balayage',
    image: 'null',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi purus, luctus eu pretium vel, malesuada ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vehicula sollicitudin accumsan. Proin ornare ante lacus, at consectetur sem pellentesque vel. Praesent lacus elit, efficitur ut augue ac, iaculis hendrerit leo. Sed egestas purus libero, vel efficitur ante tincidunt in. Vestibulum congue lacus neque, vel convallis justo interdum ac. Nunc non dictum lacus. ',
    price: 130,
    quantity: 1
  },
  {
    category: 2,
    name: 'Derma Treat',
    image: 'null',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi purus, luctus eu pretium vel, malesuada ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vehicula sollicitudin accumsan. Proin ornare ante lacus, at consectetur sem pellentesque vel. Praesent lacus elit, efficitur ut augue ac, iaculis hendrerit leo. Sed egestas purus libero, vel efficitur ante tincidunt in. Vestibulum congue lacus neque, vel convallis justo interdum ac. Nunc non dictum lacus. ',
    price: 180,
    quantity: 1
  }
]

exports.seed = function(knex, Promise) {
  return knex('salesDetails').del()
    .then(function () {
      return knex('salesDetails').insert(data);
    });
};