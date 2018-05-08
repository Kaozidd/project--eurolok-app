const data = [
  {
    name: 'Frank',
    email: 'beardedbear@yahoo.com',
    password: 'spotRho1986',
    phone: 5585730184,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi purus, luctus eu pretium vel, malesuada ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vehicula sollicitudin accumsan. Proin ornare ante lacus, at consectetur sem pellentesque vel. Praesent lacus elit, efficitur ut augue ac, iaculis hendrerit leo. Sed egestas purus libero, vel efficitur ante tincidunt in. Vestibulum congue lacus neque, vel convallis justo interdum ac. Nunc non dictum lacus. ',
    picture: 'link-to-image',
    roleId: 1
  },
  {
    name: 'Carsten',
    email: 'herFriseur@outlook.com',
    password: 'fireSig3067',
    phone: 5512869978,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi purus, luctus eu pretium vel, malesuada ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vehicula sollicitudin accumsan. Proin ornare ante lacus, at consectetur sem pellentesque vel. Praesent lacus elit, efficitur ut augue ac, iaculis hendrerit leo. Sed egestas purus libero, vel efficitur ante tincidunt in. Vestibulum congue lacus neque, vel convallis justo interdum ac. Nunc non dictum lacus. ',
    picture: 'link-to-image',
    roleId: 2
  },
  {
    name: 'George',
    email: 'tattoohawk@outlook.com',
    password: 'chroEps0024',
    phone: 5537556843,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi purus, luctus eu pretium vel, malesuada ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vehicula sollicitudin accumsan. Proin ornare ante lacus, at consectetur sem pellentesque vel. Praesent lacus elit, efficitur ut augue ac, iaculis hendrerit leo. Sed egestas purus libero, vel efficitur ante tincidunt in. Vestibulum congue lacus neque, vel convallis justo interdum ac. Nunc non dictum lacus. ',
    picture: 'link-to-image',
    roleId: 2
  },
  {
    name: 'Helena Winchester',
    email: 'spartan-helade@gmail.com',
    password: 'tunesPi2087',
    phone: 5556748391,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi purus, luctus eu pretium vel, malesuada ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vehicula sollicitudin accumsan. Proin ornare ante lacus, at consectetur sem pellentesque vel. Praesent lacus elit, efficitur ut augue ac, iaculis hendrerit leo. Sed egestas purus libero, vel efficitur ante tincidunt in. Vestibulum congue lacus neque, vel convallis justo interdum ac. Nunc non dictum lacus. ',
    picture: 'link-to-image',
    roleId: 0
  }
]

exports.seed = function(knex, Promise) {
  return knex('netUsers').del()
    .then(function () {
      return knex('netUsers').insert(data);
    });
};