const express = require('express')
const { Model } = require('objection')
const ejs = require('ejs')
const bodyParser = require('body-parser')

const dbConnect = require('./src/database/dbConnect')
const knexFile = require('./knexFile') 

const app = express()

const pageRouter = require('./src/routers/pageRouter')
const apiRouter = require('./src/routers/apiRouter')

const appConnectToDb = dbConnect(knexFile.development)

Model.knex(appConnectToDb)

app.locals.db = appConnectToDb

app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)
app.use(express.static(`${__dirname}/public`))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', pageRouter)
app.use('/api', apiRouter)

app.use(function(req, res) {
	res.render('reactApp.ejs')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, function() {
	console.log(`App running on port: ${PORT}`)
})