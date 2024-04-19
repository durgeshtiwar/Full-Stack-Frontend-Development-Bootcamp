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

//16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let radius = prompt("Enter Radius: ");
// console.log(`Area of circle is ${Math.PI*radius**2} and circumference of a circle is ${Math.PI*2*radius}`);

// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm
// let date = new Date();
// let year = date.getFullYear()+ "";
// let month = (date.getMonth()+1)+ "";
// let day = date.getDate() + "";
// let hour = date.getHours() + "";
// let min = date.getMinutes() + "";

// year = checkZero(year);    
// month = checkZero(month);   
// day = checkZero(day);
// hour = checkZero(hour); 
// min = checkZero(min);   
// function checkZero(item)
// {
//     if (item.length == 1) s
//     {
//         item = '0'+item;
        
//     }
//     return item;
// }
// console.log(year + "-" + month + "-" + day + " " + hour + ":" + min);
// console.log(day + "-" + month + "-" + year + " " + hour + ":" + min);
// console.log(day + "/" + month + "/" + year + " " + hour + ":" + min);

//18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// let age = prompt("Please enter your Age?");
// if (age == 18 || age>18) {
//     console.log(`feedback:'You are old enough to drive'`);
// } else {
//     console.log(`feedback:'stating to wait for the number of years he needs to turn 18'`);
// }

//19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// const num1 = prompt("Enter the no.");
// if (num1%2 == 0) {
//     console.log(num1+" is an even number.");
// } else {
//     console.log(num1+" is an odd number.");
// }

// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F
// let score=prompt('please enter student\'s score');
// switch (true) {
//     case score>80 && 100>score:
//         console.log("Stuent pass with A Grades");
//         break;
//     case score>70 && 89>score:
//         console.log("Stuent pass with B Grades");
//         break;
//     case score>60 && 69>score:
//         console.log("Stuent pass with C Grades");
//         break;
//     case score>50 && 59>score:
//         console.log("Stuent pass with D Grades");
//         break;
//     case score>0 && 49>score:
//         console.log("Stuent Fail");
//         break;
//     default:
//         console.log("Con't Exist");
//         break;
//               }

// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer
// let month = prompt("Please Enter The Month");
// switch (month) {
//     case "September" || "October" || "November":
//         console.log("The Season Is Autumn");
//         break;
//     case "December" || "January" || "February":
//         console.log("The Season Is Winter");
//         break;
//     case "March" || "April" || "May":
//         console.log("The Season Is Spring");
//         break;
//     case "June" || "July" || "August":
//         console.log("The Season Is Autumn");
//         break;
//     default:
//         console.log("Invalid Month");
//         break;
// }

//22. Write a program which tells the number of days in a month.
// let month = prompt("Please Enter The Month");
// switch (month) {
//     case "September" || "October"|| "April" || "June" || "November":
//         console.log("Number of Days in this month is 30");
//         break;
//     case "February":
//         console.log("Number of Days in this month is 28 or 29");
//         break;
//     case "January" || "February" ||"March" || "May" || "July" || "August":
//         console.log("Number of Days in this month is 30");
//         break;
//     default:
//         console.log("Invalid Month");
//         break;
// }

//23. Write a program which tells the number of days in a month, now consider leap year.
// let month = prompt("Please Enter The Month");
// switch (month) {
//     case "September" || "October"|| "April" || "June" || "November":
//         console.log("Number of Days in this month is 30");
//         break;
//     case "February":
//         console.log("Number of Days in this month is 29 due to Leap Year");
//         break;
//     case "January" || "February" ||"March" || "May" || "July" || "August":
//         console.log("Number of Days in this month is 30");
//         break;
//     default:
//         console.log("Invalid Month");
//         break;
// }

//24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// console.log(country_list);
// console.log(country_list2);
// console.log(webTechs);

// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// let myAllergicItem = 'honey';
// if (!shoppingCart.includes('Meat')) {
//     shoppingCart.unshift('Meat');
// }
// if (!shoppingCart.includes('Sugar')) {
//     shoppingCart.push('Sugar');
// }
// if (!shoppingCart.includes(myAllergicItem)){
//         shoppingCart.splice(shoppingCart.indexOf('Honey'),  1);
// }
// if (shoppingCart.includes('Tea')){
//     shoppingCart[shoppingCart.indexOf('Tea')]='Green Tea';
// }
// console.log(shoppingCart);

//26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// if (country_list.includes('Ethiopia')) {
//     console.log(country_list[country_list.indexOf('Ethiopia')].toUpperCase());
// }

// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// let sortAge = ages.sort();
// let min = Math.min(...ages);
// let max = Math.max(...ages);
// let average =  ages.reduce((total, next) => total + next) / ages.length;
// let range = max - min;
// console.log(`Soredt  Ages : ${sortAge}`);
// console.log(`Minimum Age: ${min}`);
// console.log(`Maximum Age: ${max}`);
// console.log(`Average Age: ${average}`);
// console.log(`Range of Ages: ${range}`);

//28. Use for loop to iterate from 0 to 100 and print only prime numbers
// const arr1 = [2];
// for (let i = 3; i < 100; i++) {
//     let count = 0;
//     for (let j = 2; j <= i/2; j++) {
//         if (i%j === 0) {
//             count = count+1;
//             break;
//         }
//     }
//     if (count === 0) {
//         arr1.push(i);
//     }
// }
// console.log(arr1);

//29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// const arrEvens = [];
// const arrOdds = [];
// for (let i = 0; i <= 100; i++){
//     if (i % 2 ==  0){
//         arrEvens.push(i);
//     } else{
//         arrOdds.push(i);
//     }
// }
// console.log("Sum of even numbers is " + arrEvens.reduce((a,b)=> a + b));
// console.log("Sum of odd numbers is " + arrOdds.reduce((c,d)=> c + d)) ;

//30. Write a script which generates a random hexadecimal number.
// function getRandomHexNumber() {
//     return Math.floor(Math.random() * 16).toString(16);
// }
// const hexColor = () => `${"#" + Array.from({length: 6}).map(getRandomHexNumber).join('')}`;
// console.log(hexColor());