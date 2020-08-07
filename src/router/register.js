const { User } = require('../moudels/User.js');


const register = (data, socket) => {
    if(data == undefined){
        socket.emit('register', {
            success: false,
            message: 'data not found'
        });
    }
    else if(data.username == undefined || data.username == ""){
        socket.emit('register', {
            success: false,
            message: 'username not found'
        });
    }
    else if(data.name == undefined || data.name == ""){
        socket.emit('register', {
            success: false,
            message: 'name not found'
        });
    }
    else if(data.mail == undefined || data.mail == ""){
        socket.emit('register', {
            success: false,
            message: 'mail not found'
        });
    }
    else if(data.password == undefined || data.password == ""){
        socket.emit('register', {
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
        
        user.save((error) => {
            if(error == undefined) {
                socket.emit('register', {
                    success: true,
                    userId: user._id
                });
            }
            else if(error.code == 11000) {
                Object.keys(User.schema.obj).filter(field => User.schema.obj[field].unique==true).forEach(field => {
                    if(field in error.keyValue) {
                        socket.emit('register', {
                            success: false,
                            message: "value exist at other user (" + field + ")"
                        });
                    }
                });
            }
            else{
                socket.emit('register', {
                    success: false,
                    message: "Unknown error!"
                });
            }
        });
    }
};

module.exports = {register};