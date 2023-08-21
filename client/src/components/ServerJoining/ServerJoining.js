import React from 'react'
import {useState} from "react";
import axios from "axios";
import useWebSocket from 'react-use-websocket';

export default function ServerJoining() {
  //websocket
  const ws_url = 'ws://127.0.0.1:2888';

  const JoinServer = () => {
    console.log("function running");
    useWebSocket(ws_url, {
      onOpen: () => {
        console.log('connection established with server');
      }
    })
  };

  //handle join data
    const [serverRequest, setServerRequest] = useState({
      username: "",
      serverCode: ""
    })

  function handleUserChange(event){
    setServerRequest({
      ...serverRequest,
      username: event.target.value
    });
  }

  function handleCodeChange(event){
    setServerRequest({
      ...serverRequest,
      serverCode: event.target.value
    });
  }



  return (
    <div>
        Party list here
      <form>
        <input placeholder='username' onChangeCapture={(event) => handleUserChange(event)}></input>
        <input placeholder='Server Code' onChangeCapture={(event) => handleCodeChange(event)}></input>
        <button onClick={JoinServer()}>Join Party</button>
      </form>
    </div>
  )
}
