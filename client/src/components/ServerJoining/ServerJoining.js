import React from 'react'
import {useState, useCallback} from "react";
import Handshake from './Handshake.js';
import PartyList from './partyList/partyList';
export default function ServerJoining() {


  //handle join data
    const [serverRequest, setServerRequest] = useState({
      username: "",
      serverCode: "",
      server: ""
    })

  //manage party list

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

  function handleServerSelect(event){
    setServerRequest({
      ...serverRequest,
      server: event.target.value
    });
  }

  let handshake = Handshake();
  console.log("handshake = " + JSON.stringify(handshake));
  
  return (
    <div>
      {handshake && <select onChangeCapture={(event) => handleServerSelect(event)}><PartyList id="select" partyList={handshake.partyList}/></select>}
      <form>
        <input placeholder='username' onChangeCapture={(event) => handleUserChange(event)}></input>
        <input placeholder='Server Code' onChangeCapture={(event) => handleCodeChange(event)}></input>
      </form>
      <button>Let's gooooo</button>
      </div>
  )
}
