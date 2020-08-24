// require statement
const db = require('../models')
const { response } = require('express')

const index = (request, response) => {
    db.Rating.find({}, (err, foundRatings) => {
        if (err) console.log("Error in ratings#index:", err)
        if (!foundRatings) return response.json({
            message: "No ratings in database."
        })
        response.status(200).json({ ratings: foundRatings})
    })
}

const show = (request, response) => {
    db.Rating.findById(request.params.id, (err, foundRating) => {
        if (err) console.log("Error in ratings#show", err)
        if (!foundRating) return response.json({
            message: "Rating with provided ID not found."
        })
        response.status(200).json({ rating: foundRating })
    })
}

const create = (request, response) => {
    db.Rating.create(request.body, (err, savedRating) => {
        if (err) console.log("Error in ratings#create:", err)
        // TODO: validations and error handling here (if needed)
        response.status(200).json({ rating: savedRating })
    })
}

const update = (request, response) => {
    const options = { new: true }
    db.Rating.findByIdAndUpdate(request.params.id, request.body, options, (err, updatedRating) => {
        if (err) console.log("Error in ratings#update", err)
        if (!updatedRating) return response.json({
            message: "No game with that ID found."
        })
        // TODO: validations and error handling here (if needed)
        response.status(200).json({ rating: savedRating })
    })
}

const destroy = (request, response) => {
    db.Rating.findByIdAndDelete(request.params.id, (err, deletedRating) => {
        if (err) console.log("Error in ratings#destroy", err)
        if (!deletedRating) return response.json({
            message: "No game with that ID found"
        })
        response.status(200).json({ rating: deletedRating })
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}