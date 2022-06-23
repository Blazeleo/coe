import React,{useState,useEffect} from 'react'
import coe from './coe.json';

export default function TestLanding() {
    const date = [21,22,23,24,25,26];
    var studCount = 1200,studRoomCount=32,sessionCount,totDuties,assistCount=0,assocCount=0,profCount=0;
    var dayList = coe;
    var doneList=[];
    for(let i=0; i<date.length;i++)
        doneList.push([]);
    const [worked,setWorked] = useState(["worked","2","3"]);

    function eachDay(e) {
        e.preventDefault();
        let v1 = 0,
            v2 = 0,
            v3 = 0;
        for (let x of dayList) {
            if (x.desig === "Associate Professor") v2++; // number of Associate Professors

            else if (x.desig === "Professor") v3++; //number of Professors

            else v1++; // number of Assistant professors
        }

        totDuties = (studCount / studRoomCount * 12); //duties for duration of exam
        assistCount = (Math.ceil(0.6 * totDuties) / v1); //number of duties per assistant professor
        assocCount = (Math.ceil(0.3 * totDuties) / v2); //number of duties per Associate Professor
        profCount = (Math.ceil(0.1 * totDuties) / v3); //number of duties per Professor

        date.forEach(daySet);  
        console.log(doneList) 
        setWorked(doneList);               
    }
    
    function daySet(value,index,array) {
        let seshCount = 1;
        let mornCount = 0;
        let aftCount = 0;
        let mornLim = totDuties/12;
        let dayLim = totDuties/6 + 1;
        
        for(let x in dayList){
            if(seshCount === dayLim)
                break;
            let lim = 0;
            if(dayList[x].desig === "Assistant Professor"){
                lim = assistCount;
            }

            else if(dayList[x].desig === "Associate Professor"){
                lim = assocCount;
            }

            else{
                lim = profCount;
            }

            if((dayList[x].total_count < lim) && (dayList[x].day_session_count < 1)){
                dayList[x].day_session_count++;
                dayList[x].total_count++;
                
                if((dayList[x].morn === 0) && (seshCount <= mornLim)){
                    dayList[x].aft = 0;
                    dayList[x].morn = 1;
                    mornCount++;
                }
                else{
                    dayList[x].morn = 0;
                    dayList[x].aft = 1;
                    aftCount++;
                }
                
                seshCount++;
                doneList[index].push(dayList[x]);  

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
        // console.log(doneList)
        console.log(worked)
        // setRemaining(dayList);
    }, [worked]);

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
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}
