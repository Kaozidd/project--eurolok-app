const data = [
  {
    customerReview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi purus, luctus eu pretium vel, malesuada ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vehicula sollicitudin accumsan. Proin ornare ante lacus, at consectetur sem pellentesque vel. Praesent lacus elit, efficitur ut augue ac, iaculis hendrerit leo. Sed egestas purus libero, vel efficitur ante tincidunt in. Vestibulum congue lacus neque, vel convallis justo interdum ac. Nunc non dictum lacus. ',
    customerRate: 9,
    pictures: 'link-to-pictures'
  }
]

exports.seed = function(knex, Promise) {
  return knex('appointments').del()
    .then(function () {
      return knex('appointments').insert(data);
    });
};