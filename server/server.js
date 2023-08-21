const { WebSocket, WebSocketServer } = require('ws');
const http = require('http');
const uuidv4 = require('uuid').v4;

//create websocket server
const server = http.createServer();
const webSocket = new WebSocketServer({ server });

//list of active parties
let parties = require("./parties.json")

const PORT = 2888;

let clients = {}

webSocket.on('connection', function(connection){
    //generate unique ID
    const userID = uuidv4();
    console.log("new connection...");

    // Store new connection
    clients[userID] = connection;
    console.log(`${userID} connected \n current clients: ${clients}`)
});

server.listen(PORT, () => console.log(`app is listening on port ${PORT}`));