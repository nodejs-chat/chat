var mongoose = require('mongoose');

const init = () => {
    const uri = "mongodb+srv://Chat:<PASSWORD>@chat-db-sx5gg.mongodb.net/chat";
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    this.db = mongoose.connection;

    this.db.on('error', console.error.bind(console, 'connection error:'));
    this.db.once('open', function() {
        console.log('Connection opend!');
    });
};

module.exports = {init, mongoose};