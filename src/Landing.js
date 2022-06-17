import React,{useState,useEffect} from 'react'
import coe from './coe.json';

function Landing() {
    const [studCount,setstudCount] = useState(1200);
	const [studRoomCount,setstudRoomCount] = useState(32);
	const [sessionCount,setsessionCount] = useState();
	const [totDuties,settotDuties] = useState(0);

    
	const [assistCount,setAssistCount] = useState(0); //6
	const [assocCount,setAssocCount] = useState(0); //3
	const [profCount,setProfCount] = useState(0); //1
    
    const [dayList,setDayList] = useState([]);
    const [doneList,setDoneList] = useState([]);
    
    function main(e)
    {
        e.preventDefault();
        settotDuties(Math.ceil(studCount/studRoomCount) * 2);

        setDayList(coe);
        for(let x of dayList){            
           
            if(x.desig == "Associate Professor"){
                setAssocCount(1);
            }
            else if(x.desig == "Professor")
                setProfCount(profCount + 1);
            else
                setAssistCount(assistCount + 1);
    }

        
        setAssistCount(Math.ceil(0.6 * totDuties)/assistCount);
        setAssocCount(Math.ceil(0.3 * totDuties)/assocCount);
        setProfCount(Math.ceil(0.1 * totDuties)/profCount);
    }
	useEffect(()=>{
		console.log(assistCount,assocCount,profCount);
	},[assistCount,assocCount,profCount]);

  return (
    <div>
        <input type="text" id="studCount" placeholder="Student count" value={studCount} onChange={e => setstudCount(e.target.value)} />
        <input type="text" id="studRoomCount" placeholder="Students/Room count" value={studRoomCount} onChange={e => setstudRoomCount(e.target.value)}/>
        <input type="text" id="sessionCount" placeholder="Session count" value={sessionCount} onChange={e => setsessionCount(e.target.value)}/>
        <button onClick={main}>submit</button>
		{/* {dayList.map((day,index) => (
			<div key={index}>
				<br></br>
				<div>id: {day.id}</div>
				<div>{day.name}</div>
				<div>{day.day_session_count}</div>
				<div>{day.total_count}</div>
				<div>{day.desig}</div>
				<div>{day.dept}</div>				
			</div>
		))} */}
    </div>
  )
}

export default Landing;