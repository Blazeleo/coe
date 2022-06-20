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
    
    function daySet(e)
    {
        var v1=0, v2=0, v3=0;
        e.preventDefault();

        //Get Limit of assignments to each faculty

        settotDuties(Math.ceil(studCount/studRoomCount) * 12);
        console.log('Total Duties: ' + totDuties/12); 
        setDayList(coe);
        // console.log(dayList);
        for(let x of dayList){            
           
            if(x.desig === "Associate Professor"){
                v1++;
                setAssocCount(assocCount+1);
            }
            else if(x.desig === "Professor")
            {
                v2++;
                setProfCount(profCount + 1);
            }
            else{
                v3++;
                setAssistCount(assistCount + 1);
            }
        }

        // console.log(v1,v2,v3);
        setAssistCount(Math.ceil(Math.ceil(0.6 * totDuties)/v3));
        setAssocCount(Math.ceil(Math.ceil(0.3 * totDuties)/v1));
        setProfCount(Math.ceil(Math.ceil(0.1 * totDuties)/v2));

        // console.log(assistCount,assocCount,profCount);

        //Assign the duties to the faculty with limit constraint
        let seshCount = 1;
        let mornCount = 0;
        let aftCount = 0;
        let mornLim = totDuties/12;
        let dayLim = totDuties/6 + 1;
        
        for(let x of dayList){
            if(seshCount === dayLim)
                break;
            let lim = 0;

            if(x.desig === "Assistant Professor"){
                lim = assistCount;
            }

            else if(x.desig === "Associate Professor"){
                lim = assocCount;
            }

            else{
                lim = profCount;
            }

            if(x.total_count < lim){
                x.day_session_count++;
                x.total_count++;
                
                if((x.morn === 0) && (seshCount <= mornLim)){
                    x.aft = 0;
                    x.morn = 1;
                    mornCount++;
                    console.log("Morning: " + x.name);
                }
                else{
                    x.morn = 0;
                    x.aft = 1;
                    aftCount++;
                    console.log("Afternoon: " + x.name);

                }
                
                seshCount++;
                setDoneList([...doneList,x]);
                let tempArr = dayList;
                let elem = tempArr.shift();
                tempArr.push(elem);
                setDayList(tempArr);             
            }
        }
           
        // console.log(doneList);
        console.log(mornCount,aftCount);
        console.log(seshCount);
        // console.log(dayList);
    }
	useEffect(()=>{
		console.log(assistCount,assocCount,profCount);
	},[assistCount,assocCount,profCount]);

  return (
    <div>
        <input type="text" id="studCount" placeholder="Student count" value={studCount} onChange={e => setstudCount(e.target.value)} />
        <input type="text" id="studRoomCount" placeholder="Students/Room count" value={studRoomCount} onChange={e => setstudRoomCount(e.target.value)}/>
        <input type="text" id="sessionCount" placeholder="Session count" value={sessionCount} onChange={e => setsessionCount(e.target.value)}/>
        <button onClick={daySet}>submit</button>
        <div>Daylist
		{dayList.map((day,index) => (
			<div key={index}>
				<br/>
				<span>Name: {day.name} |  </span>
				<span>Day_sesh_count: {day.day_session_count} |  </span>
				<span>total_count: {day.total_count} | </span>
				<span>desig: {day.desig} | </span>			
				<span>morn: {day.morn} | </span>			
				<span>aft: {day.aft} | </span>			
			</div>
		))}
        </div>
<br/><br></br>
        <div>Donelist
		{doneList.map((day,index) => (
			<div key={index}>
				<br/>
				<span>Name: {day.name} | </span>
				<span>Day_sesh_count: {day.day_session_count} | </span>
				<span>total_count: {day.total_count} | </span>
				<span>desig: {day.desig} | </span>	                			
				<span>morn: {day.morn} | </span>			
				<span>aft: {day.aft} | </span>		
			</div>
		))}
        </div>
    </div>
  )
}

export default Landing;