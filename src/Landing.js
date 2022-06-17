import React,{useState} from 'react'
import coe from './coe.json';

function Landing() {
    const [studCount,setstudCount] = useState(1200);
	const [studRoomCount,setstudRoomCount] = useState(32);
	const [sessionCount,setsessionCount] = useState();
	const [totDuties,settotDuties] = useState(0);
    
    const [dayList,setDayList] = useState([]);
    
    let doneList = [];
    function main(e)
    {
        e.preventDefault();
        settotDuties(Math.ceil(studCount/studRoomCount) * 2);
        console.log(studCount,studRoomCount,totDuties);
        let tempList = [];
        coe.map((x) => {
            tempList.push(x);
        });   
        setDayList(tempList);
        console.log(dayList);
    }

  return (
    <div>
        <input type="text" id="studCount" placeholder="Student count" value={studCount} onChange={e => setstudCount(e.target.value)} />
        <input type="text" id="studRoomCount" placeholder="Students/Room count" value={studRoomCount} onChange={e => setstudRoomCount(e.target.value)}/>
        <input type="text" id="sessionCount" placeholder="Session count" value={sessionCount} onChange={e => setsessionCount(e.target.value)}/>
        <button onClick={main}>submit</button>
        {dayList.map((x) => {<span>{x}l</span>})}
    </div>
  )
}

export default Landing;