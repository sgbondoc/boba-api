// require statements
const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../models/user')

// passport functions 

// invoked at user log in to save the session through request.session.passport.user
passport.serializeUser((user, done) => {
    console.log("passport/index.js: serializeUser function called")
    console.log(user)
    done(null, user._id)
})

// invoked anytime logged in user makes a request to the app
// passport adds user info to request.user to verify as authenticated user
passport.deserializeUser((id, done) => {
    console.log("passport/index.js: deserializeUser function called")

    User.findById(id, 'email', (err, user) => {
        if (err) return done(err, null)
        console.log(user)
        done(null, user)
    })
}) 

passport.use(LocalStrategy)

module.exports = passport