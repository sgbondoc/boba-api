// require statements
const express = require('express')
const app = express()

// needs to be right under express require statements
require('dotenv').config()

const routes = require('./routes')

// for auth
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session) 
const passport = require('./passport')

const port = process.env.PORT || 4000

// middleware JSON parsing
app.use(express.json())

// middleware cors
const corsOptions = {
    origin: ['http://localhost:3000', 'https://showmetheboba.herokuapp.com'],
    credentials: true,
    optionsSuccessStatus: 204
}

app.use(cors(corsOptions))

// app.use((request, response, next) => {
//     response.header('Access-Control-Allow-Origin', '*')
//     next()
// })

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://showmetheboba.herokuapp.com')
    res.setHeader('Vary', 'Origin')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    next()
})

// middleware session config
app.use(session({
    store: new MongoStore({ url: process.env.MONGODB_URI || 'mongodb://localhost:27017/boba' }),
    secret: "ILoveBoba",
    resave: false,
    saveUninitialized: false,
    cookie : { maxAge: 1000 * 60 * 60 * 24 }
}))

// middleware passport config
app.use(passport.initialize())
app.use(passport.session())

// middleware API routes
app.use('/api/v1/ratings', routes.ratings)
app.use('/api/v1/drinks', routes.drinks)
app.use('/api/v1/auth', routes.auth)

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`))