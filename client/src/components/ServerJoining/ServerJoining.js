import React from 'react'
import {useState, useCallback} from "react";
import Handshake from './Handshake';
import PartyList from './partyList/partyList';
export default function ServerJoining() {


  //handle join data
    const [serverRequest, setServerRequest] = useState({
      username: "",
      serverCode: ""
    })

  //manage party list

  //ignore - unimplemented
  function handleUserChange(event){
    setServerRequest({
      ...serverRequest, 
      username: event.target.value
    });
  }

  //ignore - unimplemented
  function handleCodeChange(event){
    setServerRequest({
      ...serverRequest,
      serverCode: event.target.value
    });
  }

  let handshake = Handshake();
  console.log("handshake = " + JSON.stringify(handshake));

  return (
    <div>
      {handshake && <PartyList partyList={handshake.partyList}/>}
      <form>
        <input placeholder='username' onChangeCapture={(event) => handleUserChange(event)}></input>
        <input placeholder='Server Code' onChangeCapture={(event) => handleCodeChange(event)}></input>
      </form>
      </div>
  )
}
