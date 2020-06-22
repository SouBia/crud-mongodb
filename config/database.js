const mongoose = require('mongoose')

const uri = "mongodb+srv://dbBianca:process.env.PASSWORD_MONGO@cluster0-w4tnw.mongodb.net/crud-mongodb?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => {
    console.log('Connected to MongoDB')
});

module.exports = db;
