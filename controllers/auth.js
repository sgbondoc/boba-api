// require statements
const db = require('../models')
const bcrypt = require('bcrypt')
const { response, request } = require('express')

// functions for auth (login, register, logout, verify)
const login = (request, response) => {
    console.log("request.user here >>>>>", request.user)
    console.log("request.session here >>>>>", request.session)
    response.json({ user: request.user.email })
}

const register = (request, response) => {
    const { name, email, password } = request.bodty
    if (!name || !email || !password) {
        return response.json ({
            message: "Please enter a name, email, and password"
        })
    }
    db.User.findOne({ email: email }, (err, foundUser) => {
        if (err) return response.json({
            message: "Something went wrong"
        })
        if (foundUser) return response.json({
            message: "A user with that email already exists"
        })
        const newUser = new db.User({
            name,
            email,
            password
        })
        newUser.save((err, savedUser) => {
            if (err) response.json(err)
            response.json(savedUser)
        })
    })
}

const logout = (request, response) => {
    if (!request.user) return response.json({
        message: "No user to log out"
    })
    request.logout()
    response.json({ message: "User logged out" })
}

// utility function - developer use only
const verify = (request, response) => {

}

module.exports = {
    login,
    register,
    logout,
    verify
}