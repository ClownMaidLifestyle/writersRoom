import React from 'react'

export default function partyList({partyList}) {
    const renderList = (parties) => {
        return parties.map(party => <option value={party}>{party}</option>)
    }

if (partyList){
    return (
        renderList(partyList)
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
