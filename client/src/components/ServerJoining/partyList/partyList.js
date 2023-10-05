import React from 'react'

export default function partyList({partyList}) {
    const renderList = (parties) => {
        return parties.map(party => <li>{party}</li>)
    }

if (partyList){
    return (
        <div id="partyList">
            <h3>Available Parties:</h3>
            <ul>
                {renderList(partyList)}
            </ul>
        </div>
      )
}
else {
    return (
        <div id="partyList">
            <h3>no Parties Found</h3>
        </div>
    )
}
}
