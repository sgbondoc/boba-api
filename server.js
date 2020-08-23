// require statements
const express = require('express')
const routes = require('./routes')

const passport = require('./passport')

const port = process.env.PORT || 4000
const app = express()

// middleware JSON parsing
app.use(express.json())

// middleware passport config
app.use(passport.initialize())
app.use(passport.session())

// middleware API routes
app.use('/api/v1/auth')

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`))