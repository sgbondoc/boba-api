// require statement
const db = require('../models')

const index = (request, response) => {
    db.Rating.find({}, (err, allRatings) => {
        if (err) console.log("Error in ratings#index:", err)
        if (!allRatings) return response.json({
            message: "No ratings in database."
        })
        response.json({ ratings: allRatings})
    })
}

const show = (request, response) => {
    db.Rating.findById(request.params.id, (err, foundRating) => {
        if (err) console.log("Error in ratings#show", err)
        if (!foundRating) return response.json({
            message: "No rating with that ID found."
        })
        response.json({ rating: foundRating })
    })
}

const create = (request, response) => {
    db.Rating.create(request.body, (err, createdRating) => {
        if (err) console.log("Error in ratings#create:", err)
        // TODO: validations and error handling here (if needed)
        response.json({ rating: createdRating })
    })
}

const update = (request, response) => {
    const options = { new: true }
    db.Rating.findByIdAndUpdate(request.params.id, request.body, options, (err, updatedRating) => {
        if (err) console.log("Error in ratings#update", err)
        if (!updatedRating) return response.json({
            message: "No rating with that ID found."
        })
        // TODO: validations and error handling here (if needed)
        response.json({ 
            rating: updatedRating, 
            message: `${updatedRating.businessName} was updated successfully!`
        })
    })
}

const destroy = (request, response) => {
    db.Rating.findByIdAndDelete(request.params.id, (err, deletedRating) => {
        if (err) console.log("Error in ratings#destroy", err)
        if (!deletedRating) return response.json({
            message: "No rating with that ID found"
        })
        response.json({ 
            message: "Rating was deleted successfully!"
         })
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}