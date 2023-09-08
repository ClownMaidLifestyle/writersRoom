import useWebSocket from 'react-use-websocket';

let serverData = {
    partyList: null
}

const onMessage = (event) => {
    const data = JSON.parse(event.data);
    switch(data.type) {
        case "11":
            partyList = event.data;
        default: 
        console.log("ERR: recieved unknown message")
    }

}

return(
    serverData
)


