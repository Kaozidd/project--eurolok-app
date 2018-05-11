const Router = require('express').Router
const pageRouter = Router()

pageRouter.get('/', function(req, res) {
	res.render('reactApp.ejs')
})

module.exports = pageRouter