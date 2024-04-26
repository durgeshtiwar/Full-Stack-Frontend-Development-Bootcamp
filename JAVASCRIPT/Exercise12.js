// const requestURL = 'https://randomuser.me/api/';
// const xhr = new XMLHttpRequest();
// xhr.open('GET', requestURL );
// xhr.onreadystatechange = function () {
//     console.log(xhr.readyState);
//     if (xhr.readyState === 4) { // complete
//         const userData = JSON.parse(this.responseText);
//         console.log(typeof userData);
//         console.log(userData.results[0].name);
// }};
// // Send the request to the server, this is an asynchronous operation
// xhr.send(); 

// const promiseOne = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task is completed");
//         resolve();
//     },1000);
// });
// promiseOne.then(() => {
//     console.log("Promise one then block executed")
// });

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task two is Completed");
//         resolve();
//     },1000);
// }).then(()=>{
//     console.log("Promise two then block executed");
// });

// const promiseThree = new Promise((resolve,reject)=>{
//     console.log("Starting a third async task");
//     resolve({name:"Chai",mail: "chaiexample@gmail.com"});
// });
// promiseThree.then((data)=>console.log(`Name : ${data.name} , Mail : ${data.mail}`));


// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("This is the Fourth async  Task");
//     let error = false;
//     if (!error) {
//         resolve({name:"Chai",mail: "chaiexample@gmail.com"});
//     }
//     else {
//         reject("Erorr Occured in the fourth Async Task");
//     }
//     },1000)
// });
// promiseFour.then((user)=>{
//     console.log(`User Name : ${user.name}, User Email : ${user.mail}`);
//     return user.name;
// })
// .then((username)=>{
//     console.log(`Showing User Name only : ${username}`);
// })
// .catch((err)=>{
//     console.log(err);
// });


const promiseFive = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("This is the final async  Task");
            let error = true;
        if (!error) {
            resolve({name:"Chai",mail: "chaiexample@gmail.com"});
        }
        else {
            reject("Erorr Occured in the final Async Task");
        }
        },1000)
    });
async function consumedPromiseFive()
{
    try {
        const response = await promiseFive;
        console.log(response);
        console.log(`User Name : ${response.name}, User Email : ${response.mail}`);
    } catch (error) {
        console.log(error);
    }
}
consumedPromiseFive();