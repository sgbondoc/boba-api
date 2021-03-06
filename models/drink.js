// require statement
const mongoose = require('mongoose')

// drink schema
const DrinkSchema = new mongoose.Schema({
    drink: String
})

const Drink = mongoose.model('Drink', DrinkSchema)

module.exports = Drink