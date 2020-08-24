// require statements
const router = require('express').Router()
const passport = require('../passport')
const controller = require('../controllers') 

// routes for auth (login, register, logout, verify)
// path = /api/v1/auth
router.post('/login', passport.authenticate('local'), controller.auth.login)
router.post('/register', controller.auth.register)
router.delete('/logout', controller.auth.logout)
// utility route - not visible to users
router.delete('verify', controller.auth.verify)

module.exports = router