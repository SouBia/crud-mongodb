const mongoose = require('mongoose')

const uri = 'mongodb://localhost/crud-mongodb';

mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => {
    console.log('Connected to MongoDB')
});

module.exports = db;