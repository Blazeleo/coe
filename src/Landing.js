import React,{useState,useEffect} from 'react'
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
        setDayList(coe);
    }
	useEffect(()=>{
		console.log(dayList);
	},[dayList]);

  return (
    <div>
        <input type="text" id="studCount" placeholder="Student count" value={studCount} onChange={e => setstudCount(e.target.value)} />
        <input type="text" id="studRoomCount" placeholder="Students/Room count" value={studRoomCount} onChange={e => setstudRoomCount(e.target.value)}/>
        <input type="text" id="sessionCount" placeholder="Session count" value={sessionCount} onChange={e => setsessionCount(e.target.value)}/>
        <button onClick={main}>submit</button>
		{dayList.map((day,index) => (
			<div key={index}>
				<br></br>
				<div>id: {day.id}</div>
				<div>{day.name}</div>
				<div>{day.day_session_count}</div>
				<div>{day.total_count}</div>
				<div>{day.desig}</div>
				<div>{day.dept}</div>

				
			</div>
		))}
    </div>
  )
}

export default Landing;