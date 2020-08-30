// require statements
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// user schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// user methods
UserSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },

    hashPassword: function (plainTextPassword) {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(plainTextPassword, salt)
    }
}

// pre hook for modifications needed before saving user info to db
UserSchema.pre('save', function (next) {
    if (!this.password) {
        next()
    } else {
        this.password = this.hashPassword(this.password)
        next()
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User