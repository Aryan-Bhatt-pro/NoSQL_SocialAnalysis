const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Hasanabbas:45cqLrPRIh29XLEd@nosqlproject.okvsiyt.mongodb.net/NoSQLProject"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo");
    });
};

module.exports = connectToMongo 