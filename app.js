var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs').promises;
var path = require('path');
var DB = require('./src/db/index.js');
var router = require('./src/router/index.js');

port = 8080;

async function main() {
    var DBPass = await fs.readFile(path.join(__dirname, "src", "db", "db.password"), 'utf8');
    await DB.init(DBPass);

    server.listen(port, () => {
        console.log('Server listening at port localhost:%d', port);
    });

    app.use(express.static(path.join(__dirname, 'src', 'public_html')));

    router.init(io, app);

    return;
}

main();
var a;
//another
//my change
//anothe
//hey



