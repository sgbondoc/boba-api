// require statements
const express = require('express')
const routes = require('./routes')

const port = process.env.PORT || 4000
const app = express()



// connection
app.listen(port, () => console.log(`Server is running on port ${port}`))