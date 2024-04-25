// let randomColor = function genrateRandomColor()
// {
//     const hex = "0123456789ABCDEF";
//     let color = "#";
//     for(let i=0;i<6;i++){
//         color += hex[Math.floor(Math.random()*16)];
//     }
//     return color;
// }
// let changeColorId;
// document.querySelector("#start").addEventListener('click', (e) => 
// {
//     let changeColor = function () {
//         document.body.style.backgroundColor = randomColor();
//     }
//     if (!changeColorId) {
//         changeColorId = setInterval(changeColor, 1000);
//     }
// }); 

// document.querySelector("#stop").addEventListener('click', (e) => 
// {
//    clearInterval(changeColorId);
//    changeColorId = null;
// }); 


// Key


let insert = document.querySelector('#insert');
window.addEventListener("keydown", (e)=>
{
    insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});