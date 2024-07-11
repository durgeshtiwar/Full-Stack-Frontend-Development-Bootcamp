import { useEffect, useState } from "react";

function AppTime()
{
  const [time,setTime] = useState(new Date());
  useEffect(()=>{
    const intervelId = setInterval(()=>{
      setTime(new Date());
    },1000);

    return ()=>{
      clearInterval(intervelId);
    }


  },[]);
  return <div className="time">
      <p className="lead">This is The Current Time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </div>
};
export default AppTime;