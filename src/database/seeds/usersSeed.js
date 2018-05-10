
const data = [
  {
    name: 'Frank',
    email: 'beardedbear@yahoo.com',
    password: 'spotRho1986',
    phone: 5585730184,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi purus, luctus eu pretium vel, malesuada ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vehicula sollicitudin accumsan. Proin ornare ante lacus, at consectetur sem pellentesque vel. Praesent lacus elit, efficitur ut augue ac, iaculis hendrerit leo. Sed egestas purus libero, vel efficitur ante tincidunt in. Vestibulum congue lacus neque, vel convallis justo interdum ac. Nunc non dictum lacus. ',
    picture: '/assets/team-pictures/frank.jpg',
    roleId: 1
  },
  {
    name: 'Carsten',
    email: 'herFriseur@outlook.com',
    password: 'fireSig3067',
    phone: 5512869978,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi purus, luctus eu pretium vel, malesuada ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vehicula sollicitudin accumsan. Proin ornare ante lacus, at consectetur sem pellentesque vel. Praesent lacus elit, efficitur ut augue ac, iaculis hendrerit leo. Sed egestas purus libero, vel efficitur ante tincidunt in. Vestibulum congue lacus neque, vel convallis justo interdum ac. Nunc non dictum lacus. ',
    picture: '/assets/team-pictures/carsten.jpg',
    roleId: 2
  },
  {
    name: 'Miranda',
    email: 'nailsperfect@outlook.com',
    password: 'waterlullaby',
    phone: 5573164985,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi purus, luctus eu pretium vel, malesuada ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vehicula sollicitudin accumsan. Proin ornare ante lacus, at consectetur sem pellentesque vel. Praesent lacus elit, efficitur ut augue ac, iaculis hendrerit leo. Sed egestas purus libero, vel efficitur ante tincidunt in. Vestibulum congue lacus neque, vel convallis justo interdum ac. Nunc non dictum lacus. ',
    picture: '/assets/team-pictures/miranda.jpg',
    roleId: 2
  },
  {
    name: 'Rebecca',
    email: 'glitterPink@outlook.com',
    password: 'hairymonster',
    phone: 5523468549,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi purus, luctus eu pretium vel, malesuada ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vehicula sollicitudin accumsan. Proin ornare ante lacus, at consectetur sem pellentesque vel. Praesent lacus elit, efficitur ut augue ac, iaculis hendrerit leo. Sed egestas purus libero, vel efficitur ante tincidunt in. Vestibulum congue lacus neque, vel convallis justo interdum ac. Nunc non dictum lacus. ',
    picture: '/assets/team-pictures/rebecca.jpg',
    roleId: 2
  },
  {
    name: 'Jorge',
    email: 'tattoohawk@outlook.com',
    password: 'chroEps0024',
    phone: 5537556843,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi purus, luctus eu pretium vel, malesuada ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vehicula sollicitudin accumsan. Proin ornare ante lacus, at consectetur sem pellentesque vel. Praesent lacus elit, efficitur ut augue ac, iaculis hendrerit leo. Sed egestas purus libero, vel efficitur ante tincidunt in. Vestibulum congue lacus neque, vel convallis justo interdum ac. Nunc non dictum lacus. ',
    picture: '/assets/team-pictures/jorge.jpg',
    roleId: 2
  },
  {
    name: 'Helena',
    email: 'spartan-helade@gmail.com',
    password: 'tunesPi2087',
    phone: 5556748391,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi purus, luctus eu pretium vel, malesuada ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vehicula sollicitudin accumsan. Proin ornare ante lacus, at consectetur sem pellentesque vel. Praesent lacus elit, efficitur ut augue ac, iaculis hendrerit leo. Sed egestas purus libero, vel efficitur ante tincidunt in. Vestibulum congue lacus neque, vel convallis justo interdum ac. Nunc non dictum lacus. ',
    picture: '/assets/customer-pictures/helena.jpg',
    roleId: 0
  },
  {
    name: 'Sara',
    email: 'emojada@hotmail.com',
    password: 'pirkaf23',
    phone: 5534436412,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi purus, luctus eu pretium vel, malesuada ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vehicula sollicitudin accumsan. Proin ornare ante lacus, at consectetur sem pellentesque vel. Praesent lacus elit, efficitur ut augue ac, iaculis hendrerit leo. Sed egestas purus libero, vel efficitur ante tincidunt in. Vestibulum congue lacus neque, vel convallis justo interdum ac. Nunc non dictum lacus. ',
    picture: '/assets/customer-pictures/sara.jpg',
    roleId: 0
  }
]

exports.seed = function(knex, Promise) {
  return knex('user').del()
    .then(function () {
      return knex('user').insert(data);
    });
};
