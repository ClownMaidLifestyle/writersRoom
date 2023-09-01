import { useState } from 'react'
import useWebSocket from 'react-use-websocket';


export default function Handshake() {
    const [protocolSwitch, setProtocolSwitch] = useState(null);

    //websocket
    const ws_url = 'ws://127.0.0.1:2888';


    useWebSocket(ws_url, {
        onOpen: (event) =>{
            console.log("connection established with server");
            console.log(event);
            setProtocolSwitch(event);
        }
    })

    return(
        protocolSwitch
    )
}
