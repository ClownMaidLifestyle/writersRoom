import React from 'react'
import {useState} from "react";
import Handshake from './Handshake';
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

  async function generatePartyList(){
    let partyList = Handshake();
    partyList = partyList.partyList;
    
  }



  return (
    <div>
      <div id="partyList">
      </div>

      <form>
        <input placeholder='username' onChangeCapture={(event) => handleUserChange(event)}></input>
        <input placeholder='Server Code' onChangeCapture={(event) => handleCodeChange(event)}></input>

      </form>
    </div>
  )
}
