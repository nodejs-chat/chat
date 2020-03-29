const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
            trim: true
        },
        type:{
            type: String,
            required: true,
            trim: true
        },
        chat: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Chat'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: {
            createdAt: 'created_at'
        }
    }
);

/*MessageSchema.methods.toString = function(){
    var res = "Message dump:";
    res += "\n\tfrom: " + this.user.toString().split("\t").join("\t\t");
    res += "\n\tchat: " + this.chat.toString().split("\t").join("\t\t");
    res += "\n\ttype: " + this.type;
    res += "\n\tcontent: " + this.content;

    return res;
}*/

const Message = mongoose.model('Message', MessageSchema, 'messages');

module.exports = { Message };
