const { User } = require('../moudels/User.js');
const login = (data, socket) => {

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
    else if(data.password == undefined){
        socket.emit('error', {
            success: false,
            message: 'paswword not found'
        });
    }
    else{ // all OK
        User.findOne({username: data.username, password: data.password} , (err , res)=>
        {
            if(res == undefined)
            {
                console.log("not found"); 
                //TODO: tell the user he need login again
            }
            else
            {
                console.log("found");
                // TODO: tell the server that more user is login, returns chat page.
            }
        });

    }
}

module.exports = {login};