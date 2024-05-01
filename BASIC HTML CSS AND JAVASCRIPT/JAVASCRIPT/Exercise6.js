let num2 = 3;
let arr1 =[];
arr1.push(2);
while (num2<100) {
    let num1 = 2;
    while (num1<num2) {
        if (num2%num1 === 0) {
            break;
        }
        num1++;
    }
    if (num1 === num2) {
        arr1.push(num2);
    }
    num2++;
}
console.log(arr1); 
