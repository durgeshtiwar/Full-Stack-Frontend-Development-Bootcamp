const requestURL = 'https://randomuser.me/api/';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL );
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) { // complete
        const userData = JSON.parse(this.responseText);
        console.log(typeof userData);
        console.log(userData.results[0].name);
}};
// Send the request to the server, this is an asynchronous operation
xhr.send(); 