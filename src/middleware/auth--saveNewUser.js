const NetUser = require('../models/NetUser.js')
const handleDbError = require('../helpers/handleDbError.js')

module.exports = async function saveNewUser(req, res, next){

  try {

    if(res.locals.user) return next()

    const newUser = await NetUser
      .query()
      .insert(req.body)
      .then(function(newAcc) {
        res.json(newAcc).status(200)
      })

    res.locals.newUser = newUser

    next()

  } catch (err){
    handleDbError(res, err)
  }

}
