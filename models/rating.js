// require statement
const mongoose = require('mongoose')

// rating schema
const RatingSchema = new mongoose.Schema({
    businessName: String,
    location: String,
    drink: String,
    overallRating: Number,
    drinksRating: Number,
    toppingsRating: Number,
    snacksRating: Number,
    serviceRating: Number,
})

const Rating = mongoose.model('Rating', RatingSchema)

module.exports = Rating