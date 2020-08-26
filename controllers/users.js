// require statement
const db = require('../models')

const index = (request, response) => {
    db.User.find({}, (err, foundUsers) => {
        if (err) console.log("Error in users#index:", err)
        if (!foundUsers) return response.json({
            message: "No users in database."
        })
        response.json({ users: foundUsers})
    })
}

const show = (request, response) => {
    db.User.findById(request.params.id, (err, foundUser) => {
        if (err) console.log("Error in users#show", err)
        if (!foundUser) return response.json({
            message: "No user with that ID found."
        })
        response.json({ user: foundUser })
    })
}

const create = (request, response) => {
    db.User.create(request.body, (err, savedUser) => {
        if (err) console.log("Error in users#create:", err)
        // TODO: validations and error handling here (if needed)
        response.json({ user: savedUser })
    })
}

const update = (request, response) => {
    const options = { new: true }
    db.User.findByIdAndUpdate(request.params.id, request.body, options, (err, updatedUser) => {
        if (err) console.log("Error in users#update", err)
        if (!updatedUser) return response.json({
            message: "No user with that ID found."
        })
        // TODO: validations and error handling here (if needed)
        response.json({ 
            User: updatedUser, 
            message: `${updatedUser.name} was updated successfully!`
        })
    })
}

const destroy = (request, response) => {
    db.User.findByIdAndDelete(request.params.id, (err, deletedUser) => {
        if (err) console.log("Error in users#destroy", err)
        if (!deletedUser) return response.json({
            message: "No user with that ID found"
        })
        response.json({ 
            message: "User was deleted successfully!"
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