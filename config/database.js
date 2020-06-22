const mongoose = require('mongoose')
const password = 'Biabia10!'
const uri = `mongodb+srv://dbBianca:${password}@cluster0-w4tnw.mongodb.net/crud-mongodb?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => {
    console.log('Connected to MongoDB')
});

module.exports = db;
