// require statements
const db = require('./models')
const data = require('./data.json')

// create ratings from seed file
db.Rating.deleteMany({}, (err, deletedRatings) => {
    db.Rating.create(data.ratings, (err, seededRatings) => {
        if (err) console.log(err);
        
        console.log(data.ratings.length, "rating(s) created successfully")        
    })
})

// create drinks from seed file
db.Drink.deleteMany({}, (err, deletedDrinks) => {
    db.Drink.create(data.drinks, (err, seededDrinks) => {
        if (err) console.log(err);
        
        console.log(data.drinks.length, "drinks(s) created successfully")        
    })
})

process.exit()