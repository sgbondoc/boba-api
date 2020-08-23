// require statements
const router = require('express').Router()
const passport = require('../passport')
const controllers = require('../controllers') 

// routes for auth (login, register, logout, verify)
// path = /api/v1/auth
router.post('/login', passport.authenticate('local'), controllers.auth.login)
router.post('/register', controllers.auth.register)
router.delete('/logout', controllers.auth.logout)
// utility route - not visible to users
router.delete('verify', controllers.auth.verify)

module.exports = router