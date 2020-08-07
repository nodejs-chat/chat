var register = require('./register.js');
var path = require('path');
const { User } = require('../moudels/User.js');

const init = (io, app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public_html", "index.html"));
    });

    app.get('/register', (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public_html", "register.html"));
    });

    app.get('/home', (req, res) => {
        var cookie = req.headers.cookie;
        cookie = cookie.split('; ');

        var userId = undefined;
        cookie.forEach(data => {
            data = data.split('=');
            if(data[0] === "userId")
                userId = data[1];
        });

        if(userId !== undefined)
            res.sendFile(path.join(__dirname, "..", "public_html", "chat.html"));
        else
            res.sendFile(path.join(__dirname, "..", "public_html", "index.html"));
        
    });

    io.on('connection', (socket) => {
        socket.on('register', (data) => {
            register.register(data, socket);
        });

        socket.on("login" , (data)=>{
            login.login(data,socket);
        });
    });
};

module.exports = {init};