import React,{useState,useEffect} from 'react'
import coe from './coe.json';

export default function TestLanding() {
    const date = [21,22,23,24,25,26,27,28,29,20,31,32];
    var studCount = 1200,studRoomCount=32,sessionCount,totDuties,assistCount=0,assocCount=0,profCount=0;
    var dayList = coe,doneList=[[]];
    const [status,setStatus] = useState(false);
    const [worked,setWorked] = useState(["worked","2","3"]);
    const [remaining,setRemaining] = useState([]);

    function eachDay(e) {
        e.preventDefault();
        let v1 = 0,
            v2 = 0,
            v3 = 0;
        for (let x of dayList) {
            if (x.desig === "Associate Professor") {
                v2++; // number of Associate Professors
            } else if (x.desig === "Professor") v3++;
            //number of professors
            else v1++; // number of assistant professors
        }
        totDuties = (Math.ceil(studCount / studRoomCount) * 12); //duties for duration of exam
        assistCount = (Math.ceil(0.6 * totDuties) / v1); //number of duties per assistant professor
        assocCount = (Math.ceil(0.3 * totDuties) / v2); //number of duties per Associate Professor
        profCount = (Math.ceil(0.1 * totDuties) / v3); //number of duties per Professor
        console.log(assistCount, assocCount, profCount);

        date.forEach(daySet);       
        setStatus(true);
        
    }
    
    function daySet(value,index,array) {
        // console.log('%c%s', 'color: #00e600', index);
        let seshCount = 1;
        // console.log('%c%s', 'color: #00a3cc', seshCount);
        let mornCount = 0;
        let aftCount = 0;
        let mornLim = totDuties/12;
        let dayLim = totDuties/6 + 1;
        // console.log('%c%s', 'color: #aa00ff', dayLim);
        
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

            if((x.total_count < lim) && (x.day_session_count < 1)){
                
            // console.log('In: ' + index)
                x.day_session_count++;
                x.total_count++;
                
                if((x.morn === 0) && (seshCount <= mornLim)){
                    x.aft = 0;
                    x.morn = 1;
                    mornCount++;
                    // console.log("Morning: " + x.name);
                }
                else{
                    x.morn = 0;
                    x.aft = 1;
                    aftCount++;
                    // console.log("Afternoon: " + x.name);
                }
                
                seshCount++;
                console.log('%c%s', 'color: #e50000', index);
                console.log(doneList);
                console.log(x);
                doneList[index].push(x);  

                console.log(doneList);             

                let tempArr = dayList;
                let elem = tempArr.shift();
                tempArr.push(elem);
                dayList = tempArr;             
            }
        }
        for(let x of dayList){
            x.day_session_count = 0;
        }
        

    }

    useEffect(() => {
        console.log(doneList);
        setWorked(doneList);
        // setRemaining(dayList);
    }, [status]);

    return (
        <div>
            <input
                type="text"
                id="studCount"
                placeholder="Student count"
                value={studCount}
                onChange={(e) =>studCount= e.target.value}
            />
            <input
                type="text"
                id="studRoomCount"
                placeholder="Students/Room count"
                value={studRoomCount}
                onChange={(e) => studRoomCount = (e.target.value)}
            />
            <input
                type="text"
                id="sessionCount"
                placeholder="Session count"
                value={sessionCount}
                onChange={(e) => sessionCount =(e.target.value)}
            />
            <button onClick={eachDay}>submit</button>
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
            <table>
                <tbody>
                    {date.map((day,index) => (
                        <tr>
                            <td>{day}</td>
                            <td>{worked[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}
