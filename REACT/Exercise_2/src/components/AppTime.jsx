function AppTime()
{
  let currentTime = new Date();
  return <div className="time">
      <p className="lead">This is The Current Time : {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}</p>
    </div>
};
export default AppTime;