let date =new Date().getHours();
if (date>1 && date<12) {
    document.querySelector('.wish').innerText +=" Good Morning!";
} else if(date>=12 && date<17){
    document.querySelector('.wish').innerText +=" Good Afternoon!"; 
} else if(date>=17 && date<21){
    document.querySelector('.wish').innerText +=" Good Evening!";
}
else{
    document.querySelector('.wish').innerText +=" Good Night!";
}

function countClick()
{
    var count= localStorage.getItem('count');
        count= parseInt(count);    
        if (!count) //first time visit
            count=0;
        count++;                
        localStorage.setItem("count",count);                        
    document.querySelector('.click').innerText=`Total ${count} clicks`;          
}
function changeColor()
{
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.click').style.color = `#${randomColor}`;  
    
}