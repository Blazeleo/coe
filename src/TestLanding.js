import React,{useState,useEffect} from 'react'
import coe from './coe.json';
import RenderTable from './components/RenderTable';
export default function TestLanding() {
    const date = [21,22,23,24,25,26,27,28,29,20,31,32];
    var studCount = 1200,studRoomCount=32,sessionCount,totDuties,assistCount=0,assocCount=0,profCount=0;
    var dayList = coe,doneList=[];
    const [status,setStatus] = useState(false);
    const [worked,setWorked] = useState([]);
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
        totDuties = (Math.ceil(studCount / studRoomCount) * 2); //duties per day
        assistCount = (Math.ceil(0.6 * totDuties) / v1); //number of duties per assistant professor
        assocCount = (Math.ceil(0.3 * totDuties) / v2); //number of duties per Associate Professor
        profCount = (Math.ceil(0.1 * totDuties) / v3); //number of duties per Professor
        console.log(assistCount, assocCount, profCount);

        date.forEach((day) => daySet(day));
        setStatus(true);
    }

    function daySet(day) {
        
    }

    useEffect(() => {
        setWorked(doneList);
        setRemaining(dayList);
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
                    {date.map((day) => (
                        <tr>
                            <td>{day}</td>
                            <td>place holder morn</td>
                            <td>place holder afternoon</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}
