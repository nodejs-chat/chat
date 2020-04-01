var register = require('./register.js');
const { User } = require('../moudels/User.js');

const init = (io, app) => {
    app.get('/', (req, res) => {
        res.render('index');
    });
    app.get('/delete_users', (req,res)=>
    {
        User.deleteMany({}, (err,result)=>{});
        res.send("all the users deleted");
        console.log('all the users deleted');
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