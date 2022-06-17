import React,{useState} from 'react'
// import {Form,InputGroup, Button} from 'react-bootstrap'

function Landing() {
    const [studCount,setstudCount] = useState();
	const [studRoomCount,setstudRoomCount] = useState();
	const [sessionCount,setsessionCount] = useState();
	const [totDuties,settotDuties] = useState(0);
    function main(e)
    {
        e.preventDefault();
        settotDuties(Math.ceil(studCount/studRoomCount) * 2);
        console.log(studCount,studRoomCount,totDuties);

    }

  return (
    <div>
        <input type="text" id="studCount" placeholder="Student count" value={studCount} onChange={e => setstudCount(e.target.value)}/>
        <input type="text" id="studRoomCount" placeholder="Students/Room count" value={studRoomCount} onChange={e => setstudRoomCount(e.target.value)}/>
        <input type="text" id="sessionCount" placeholder="Session count" value={sessionCount} onChange={e => setsessionCount(e.target.value)}/>
        <button onClick={main}>submit</button>
		{totDuties}
    </div>
  )
}

export default Landing