var mongoose = require('mongoose');

const init = (DBPass) => {
    const uri = "mongodb+srv://Chat:" + DBPass + "@chat-db-sx5gg.mongodb.net/chat";
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    this.db = mongoose.connection;

    this.db.once('error', function(error) {
        console.error('Connection error!' + "\nmessage:" + error.message);
    });
    this.db.once('open', function() {
        console.log('Connection opend!');
    });
};

module.exports = {init, mongoose};