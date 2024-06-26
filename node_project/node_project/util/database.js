const { MongoClient } = require('mongodb');
let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(client => {
            console.log('Connected to MongoDB');
            _db = client.db('item'); // Specify the database name here
            callback();
        })
        .catch(err => {
            console.error('Error connecting to MongoDB:', err.message);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
};

module.exports = {
    mongoConnect,
    getDb
};
