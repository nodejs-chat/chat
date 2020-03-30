var register = require('./register.js');

const init = (io, app) => {
    app.get('/', (req, res) => {
        res.render('index');
    });

    io.on('connection', (socket) => {
        var addedUser = false;
        socket.on('register', (data) => {
            if (addedUser) return;
            register.register(data, socket);
            addedUser = true;
        });
    });
};

module.exports = {init};