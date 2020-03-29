const { User } = require('./src/moudels/User.js');
const { Chat } = require('./src/moudels/Chat.js');
const { Message } = require('./src/moudels/Message.js');
const DB = require('./src/db/index.js');
var fs = require('fs').promises;
var path = require('path');

async function main() {
    var DBPass = await fs.readFile(path.join(__dirname, "src", "db", "db.password"), 'utf8');
    await DB.init(DBPass);


    return;
}

main();





