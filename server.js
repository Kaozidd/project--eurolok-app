const express = require('express')
const { Model } = require('objection')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')

const passport = require('passport')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')

const registerLocalStrategy = require('./src/middleware/passport-local--registerLocalStrategy')
const {
	configDeserializeUser,
	configSerializeUser
} = require('./src/helpers/passport-local--sessionActions')

const dbConnect = require('./src/database/dbConnect')
const knexFile = require('./knexFile') 

const pageRouter = require('./src/routers/pageRouter')
const apiRouter = require('./src/routers/apiRouter')
const authRouter = require('./src/routers/authRouter')

const app = express()

const appConnectToDb = dbConnect(knexFile.development)

Model.knex(appConnectToDb)

app.locals.db = appConnectToDb

app.use(cookieParser())
app.use(cookieSession({
	name: 'inSession',
	secret: 'supersecret',
	httpOnly: true,
	signed: false
}))

app.use(passport.initialize())
app.use(passport.session())
passport.use(registerLocalStrategy())
passport.serializeUser(configSerializeUser())
passport.deserializeUser(configDeserializeUser())

app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(`${__dirname}/public`))

app.use(logger('tiny'))
app.use(cors())

app.use('/', pageRouter)
app.use('/api', apiRouter)
app.use('/auth', authRouter)

app.use(function(req, res) {
	res.render('404.ejs')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, function() {
	console.log(`API server running on PORT: ${PORT}`)
})