import useWebSocket from 'react-use-websocket';
import React from 'react'

export default function HandleMessages(event) {

    console.log(event)
    let serverData = {
        partyList: "null"
    }

    const data = JSON.parse(event.data);
            switch(data[0]) {
            case "11":
            serverData.partyList = data[1];
            break;
            default:    
            console.log("ERR: recieved unknown message") 
        }

        
    return(
        serverData
    )
}
 