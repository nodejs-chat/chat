const { User } = require('../moudels/User.js');


const register = (data, socket) => {
    if(data.username == undefined){
        socket.emit('error', {
            success: false,
            message: 'username not found'
        });
    }
    else if(data.name == undefined){
        socket.emit('error', {
            success: false,
            message: 'name not found'
        });
    }
    else if(data.mail == undefined){
        socket.emit('error', {
            success: false,
            message: 'mail not found'
        });
    }
    else if(data.password == undefined){
        socket.emit('error', {
            success: false,
            message: 'password not found'
        });
    }
    else{
        var user = new User({
            username: data.username,
            name: data.name,
            mail: data.mail,
            password: data.password,
            socketId: socket.id
        });
        user.save();
        socket.emit('login', {
            success: true,
            username: data.username
        });
    }
};

module.exports = {register};