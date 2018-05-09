const Router = require('express').Router
const pageRouter = Router()

pageRouter.get('/', function(req, res) {
	res.render('reactApp.ejs')
})

pageRouter.get('/about', function(req, res) {
	res.render('about.ejs')
})

pageRouter.get('/services', function(req, res) {
	res.send('Services View')
})

pageRouter.get('/services/{id}', function(req, res) {
	res.send('Single Service View')
})

pageRouter.get('/products', function(req, res) {
	res.send('Products View')
})

pageRouter.get('/products/{id}', function(req, res) {
	res.send('Single Product View')
})

pageRouter.get('/team', function(req, res) {
	res.send('Team View')
})

pageRouter.get('/team/{id}', function(req, res) {
	res.send('Team Member View')
})

module.exports = pageRouter