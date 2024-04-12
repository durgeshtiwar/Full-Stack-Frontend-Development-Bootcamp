// document.getElementById("owl").addEventListener('click', function(e) {
//     console.log(e);
//     console.log("Owl clicked");
// } , false);
// document.getElementById("images").addEventListener('click', function(e) {
//     console.log(e);
//     console.log("UL clicked");
//     e.stopPropagation(); // stops the event from bubbling up to parent elements
// } , false);
document.getElementById("google").addEventListener('click', function(e) {
    e.preventDefault();
    //e.stopPropagation();  // prevent default action associated with an element (in this case, clicking a link)
    //console.log("Google link was clicked!");
},false);
document.getElementById("images").addEventListener('click',function(e) {
    
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id)
        let removeIt = e.target.parentNode; 
        removeIt.remove();
    }
});