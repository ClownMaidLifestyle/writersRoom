import { useCallback, useState } from 'react'
import useWebSocket from 'react-use-websocket';
import HandleMessages from '../HandleMessages/HandleMessages'

export default function Handshake() {
    const [protocolSwitch, setProtocolSwitch] = useState(null);
    const [serverData, setServerData] = useState(null);

    //websocket
    const ws_url = 'ws://127.0.0.1:2888';


    const ws = useWebSocket(ws_url, {
        onOpen: (event) =>{
            console.log("connection established with server");
            console.log(event);
            setProtocolSwitch(event);
        },
        onMessage: (event) => {setServerData(HandleMessages(event))},
    });

    ws.sendMessage("websocketmessage");


    return(
        serverData
    )
}
