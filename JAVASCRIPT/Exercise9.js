//1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.
// let str = 'Durgesh Tiwari';
// let bool =  true;
// let undef ;
// let nll = null;
// console.log(`${Str} and it's type is ${typeof Str}`); 
// console.log(`${bool} and it's type is ${typeof bool}`); 
// console.log(`${undef} and it's type is ${typeof undef}`); 
// console.log(`${nll} and it's type is ${typeof nll}`); 

//2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.
// let firstName = 'Durgesh';
// let lastName = 'Tiwari';
// let maritalStatus = 'UnMarried';
// let country = 'India';
// let age = 20;
// console.log(`My First Name is ${firstName}\nLast Name is ${lastName}\nMarital Status is ${maritalStatus}\nCountry Name is ${country}\nAge is ${age} `);

//3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.
// let str  = 'Durgesh Pratap Tiwari';
// console.log(str.toUpperCase());

//4. Check if the string contains a word Script using includes() method.
// let str = 'JavaScript is The Most Powerfull Programming Language for Frontend and Backend Both.';
// console.log(str.includes('Script'));

//5. Split the string into an array using split() method
// let str = 'JavaScript is The Most Powerfull Programming Language for Frontend and Backend Both.';
// const arr = str.split(" ");
// console.log(arr);

//6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// const arr = str.split(",");
// console.log(arr);

//7. Use lastIndexOf to determine the position of the last occurrence of a script.
// let  str = "I love JavaScript because it is easy to learn" 
// console.log(str.lastIndexOf("learn"));

//8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
// let str = 'You cannot end a sentence with because because because is a conjunction'
// console.log(str.search("because"));

//9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
// let str = '   This is Durgesh    ';
// console.log(str.trim());

// 10. Boolean value is either true or false.
//     - Write three JavaScript statement which provide truthy value.
//     - Write three JavaScript statement which provide falsy value.
// const arr1 = ['false', '0', 42,-42, " ", new Date (),Infinity,-Infinity];
// if (arr1[7]) {
//     console.log('This is a Truthy Value');
// } else{
//     console.log('This is Not a Truthy Value');
// }
// const arr1 = [null, undefined, NaN, 0,'', false, 0n];
// if (arr1[6]) {
//     console.log('This is not a Falsy Value');
// } else {
//     console.log('This is a Falsy Value');
// }

// 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.
// console.info(4 > 3);
// console.info(4 >= 3);
// console.info(4 < 3);
// console.info(4 <= 3);
// console.info(4 == 4);
// console.info(4 === 4);
// console.info(4 != 4);
// console.info(4 !== 4);
// console.info(4 != '4');
// console.info(4 == '4');
// console.info(4 === '4');
// console.log("\n");
// console.log(4 > 3);
// console.log(4 >= 3);
// console.log(4 < 3);
// console.log(4 <= 3);
// console.log(4 == 4);
// console.log(4 === 4);
// console.log(4 != 4);
// console.log(4 !== 4);
// console.log(4 != '4');
// console.log(4 == '4');
// console.log(4 === '4');
// console.log("\n");
// console.log('python'.length !== 'jargon'.length);

// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
// let date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.toLocaleDateString()); 
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// let givenDate = new Date('1990-01-01');
// let elapsed = date - givenDate;
// console.log(elapsed / 1000);

//13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let base = prompt('Pleas Enetr Base');
// let height = prompt('Pleas Enetr height');
// console.log(`The area of traingle is ${0.5 * base * height} square`);

//14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// let x1 = 2;
// let y1 = 2;
// let x2 = 6;
// let y2 = 10;
// console.log("Slope is = "+(y2 - y1) / (x2 - x1));

//15. Calculate the slope, x-intercept and y-intercept of y = 2x -2
//console.log("Slop is 2");