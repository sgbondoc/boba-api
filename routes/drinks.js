// require statements
const router = require('express').Router()
const controller = require('../controllers')

// routes for drinks
// path = /api/v1/drinks
router.get('/', controller.drinks.index)
router.get('/:id', controller.drinks.show)
router.post('/', controller.drinks.create)
router.put('/:id', controller.drinks.update)
router.delete('/:id', controller.drinks.destroy)

// exports
module.exports = router 