const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            maxlength: ['30', 'Name max length is 30 charters']
        },
        username: {
            type: String,
            trim: true,
            unique: true,
            maxlength: ['15', 'Username max length is 15 charters']
        },
        mail: {
            type: String,
            trim: true,
            unique: true,
            sparse: true
        },
        password: {
            type: String,
            default: null
        },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

/*UserSchema.methods.toString = function(){
    var res = "User dump:";
    res += "\n\tname: " + this.name;
    res += "\n\temail: " + this.mail;
    res += "\n\tusername: " + this.username;
    res += "\n\tpassword: " + this.password;

    return res;
}*/

const User = mongoose.model('User', UserSchema, 'users');

module.exports = { User };