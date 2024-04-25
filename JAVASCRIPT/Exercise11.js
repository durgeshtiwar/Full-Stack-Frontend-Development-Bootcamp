let randomColor = function genrateRandomColor()
{
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let changeColorId;
document.querySelector("#start").addEventListener('click', (e) => 
{
    let changeColor = function () {
        document.body.style.backgroundColor = randomColor();
    }
    if (!changeColorId) {
        changeColorId = setInterval(changeColor, 1000);
    }
}); 

document.querySelector("#stop").addEventListener('click', (e) => 
{
   clearInterval(changeColorId);
   changeColorId = null;
}); 
