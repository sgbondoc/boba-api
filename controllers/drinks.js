// require statement
const db = require('../models')

const index = (request, response) => {
    db.Drink.find({}, (err, foundDrinks) => {
        if (err) console.log("Error in drinks#index:", err)
        if (!foundDrinks) return response.json({
            message: "No drinks in database."
        })
        response.json({ drinks: foundDrinks})
    })
}

const show = (request, response) => {
    db.Drink.findById(request.params.id, (err, foundDrink) => {
        if (err) console.log("Error in drinks#show", err)
        if (!foundDrink) return response.json({
            message: "No drink with that ID found."
        })
        response.json({ drink: foundDrink })
    })
}

const create = (request, response) => {
    db.Drink.create(request.body, (err, savedDrink) => {
        if (err) console.log("Error in drinks#create:", err)
        // TODO: validations and error handling here (if needed)
        response.json({ drink: savedDrink })
    })
}

const update = (request, response) => {
    const options = { new: true }
    db.Drink.findByIdAndUpdate(request.params.id, request.body, options, (err, updatedDrink) => {
        if (err) console.log("Error in drinks#update", err)
        if (!updatedDrink) return response.json({
            message: "No drink with that ID found."
        })
        // TODO: validations and error handling here (if needed)
        response.json({ 
            drink: updatedDrink, 
            message: `${updatedDrink.drink} was updated successfully!`
        })
    })
}

const destroy = (request, response) => {
    db.Drink.findByIdAndDelete(request.params.id, (err, deletedDrink) => {
        if (err) console.log("Error in ratings#destroy", err)
        if (!deletedDrink) return response.json({
            message: "No drink with that ID found"
        })
        response.json({ 
            message: "Drink was deleted successfully!"
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