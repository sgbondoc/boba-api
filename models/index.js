// require statement
const mongoose = require('mongoose')

// connections
const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/boba"

const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(connectionString, configOptions)
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(`MongoDB connection error: ${err}`))

module.exports = {
    User: require('./user')
}