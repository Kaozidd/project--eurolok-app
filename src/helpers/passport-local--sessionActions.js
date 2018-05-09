const NetUser = require('../models/NetUser.js')


exports.configSerializeUser = function( config={} ) {
  return function(user, done){
    done(null, user.id)
  }
}

exports.configDeserializeUser = function( config={} ) {
  return async function(userId, done){
    const usr = await NetUser
      .query()
      .findById(userId)
      .returning('*')

    if(usr) delete usr.password
    done(null, usr)
  }
}
