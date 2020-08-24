// require statements
const db = require('./models')
const data = require('./ratingData.json')

// create ratings from seed file
db.Rating.deleteMany({}, (err, deletedRatings) => {
    db.Rating.create(data.games, (err, seededRatings) => {
        if (err) console.log(err);
        
        console.log(data.ratings.length, "rating(s) created successfully")
        
        process.exit()
    })
})