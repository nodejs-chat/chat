const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChatSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            minlength: ['3', 'Room name min length is 3 charters'],
            maxlength: ['30', 'Room name max length is 30 charters']
        },
        admin: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            default: null
        },
        password: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'private'
        },
        accessIds: {
            type: Array,
            default: []
        },
        roomSocketId: {
            type: String,
            default: null
        },
        users: [
            {
                _id: false,
                lookup: {
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: 'User'
                },
                socketId: {
                    type: String,
                    required: true
                }
            }
        ]
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

/*ChatSchema.methods.toString = function(){
    var res = "Chat dump:";
    res += "\n\tname: " + this.name;
    res += "\n\tadmin: " + this.admin.toString().split("\t").join("\t\t");
    res += "\n\tpassword: " + this.password;
    res += "\n\ttype: " + this.type;
    res += "\n\taccessIds: " + this.accessIds.join(" , ");

    return res;
}*/

const Chat = mongoose.model('Chat', ChatSchema, 'chats');

module.exports = { Chat };