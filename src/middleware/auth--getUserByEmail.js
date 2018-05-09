const NetUser = require('../models/NetUser.js')
const handleDbError = require('../helpers/handleDbError.js')

module.exports = async function getUserByEmail(req, res, next){
  const reqBody = req.body

  try {
    const user = await NetUser
      .query()
      .first()
      .where({ email: reqBody.email })
      .returning('*')
    
    res.locals.user = user
    next()

  } catch (err){
    return handleDbError(res, err)
  }

}
