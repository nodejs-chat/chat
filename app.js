const { User } = require('./src/moudels/User.js');
const { Chat } = require('./src/moudels/Chat.js');
const { Message } = require('./src/moudels/Message.js');
const DB = require('./src/db/index.js');

async function main() {
    await DB.init();
    const yehuda = new User(
        {
            name: 'Yehuda', 
            username: 'yehudae', 
            mail: 'yehuda@gmail.com', 
            password: 'test123'
        }
    );
    yehuda.save();
    const chat = new Chat(
        {
            name: 'Yehuda', 
            admin: yehuda, 
            accessIds: [yehuda._id], 
            users: {lookup: yehuda, socketId: "test"}
        }
    );
    chat.save();
    const message = new Message(
        {
            content: "Hello Wordld!",
            type: "text",
            chat: chat,
            user: yehuda
        }
    );
    message.save();
    console.log(message.toString());

    return;
}

main();





