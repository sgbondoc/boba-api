// require statements
const router = require('express').Router()
const controller = require('../controllers')

// routes for users
// path = /api/v1/users
router.get('/', controller.users.index)
router.get('/:id', controller.users.show)
router.post('/', controller.users.create)
router.put('/:id', controller.users.update)
router.delete('/:id', controller.users.destroy)

// exports
module.exports = router