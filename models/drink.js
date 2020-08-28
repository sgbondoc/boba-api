// require statement
const mongoose = require('mongoose')

// drink schema
const DrinkSchema = new mongoose.Schema({
    drink: String,
    likes: Number
})

const Drink = mongoose.model('Drink', DrinkSchema)

module.exports = Drink