// require statements
const router = require('express').Router()
const controller = require('../controllers')

// routes for ratings
// path = /api/v1/ratings
router.get('/', controller.ratings.index)
router.get('/id', controller.ratings.show)
router.post('/', controller.ratings.create)
router.put('/:id', controller.ratings.update)
router.delete('/:id', controller.ratings.destroy)

// exports
module.exports = router