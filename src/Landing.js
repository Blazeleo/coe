import React from 'react'

function Landing() {

    function main(e)
    {
        e.preventDefault();
        let studCount = parseInt(document.getElementById("studCount").value);
        let studRoomCount = parseInt(document.getElementById("studRoomCount").value);
        let sessionCount = parseInt(document.getElementById("sessionCount").value);

        let totDuties = Math.ceil(studCount/studRoomCount) * 2;
        console.log(studCount,studRoomCount,totDuties);

    }

  return (
    <div>
        <input type="text" id="studCount" placeholder="Student count" />
        <input type="text" id="studRoomCount" placeholder="Students/Room count" />
        <input type="text" id="sessionCount" placeholder="Session count" />
        <button onClick={main}>submit</button>
    </div>
  )
}

export default Landing