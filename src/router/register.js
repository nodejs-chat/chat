const { User } = require('../moudels/User.js');


const register = (data, socket) => {
    if(data == undefined){
        socket.emit('error', {
            success: false,
            message: 'data not found'
        });
    }
    else if(data.username == undefined){
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
        var taken = (error)=>
        {
            if(error == undefined)
            {
                
                console.log('all good!');
                socket.emit('login', {
                    success: true,
                    username: data.username
                });
            }
            else if(error.code == 11000)
            {   
                Object.keys(User.schema.obj).filter(field => User.schema.obj[field].unique==true).forEach(field => {
                    if(field in error.keyValue)
                    {
                        console.log("there is an user with same " +field+"!!!!!!");
                        socket.emit('same_field_reg', {
                            success: false,
                            field: field
                        });
                    }
                });
            }
        }
        user.save((err)=>
        {
            taken(err);
        });
    }
};

module.exports = {register};