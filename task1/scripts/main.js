// Task 1: - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14,
// 2.7, 16, true, false. Вивести кожну змінну за допомогою: console.log
const firstVariable = 'hello';
const secondVariable = 'owu';
const thirdVariable = 'com';
const fourthVariable = 'ua';
const fifthVariable = 1;
const sixthVariable = 10;
const seventhVariable = -999;
const eighthVariable = 123;
const ninthVariable = 3.14;
const tenthVariable = 2.7;
const eleventhVariable = 16;
const twelfthVariable = true;
const thirteenthVariable = false;
console.log(firstVariable)
console.log(secondVariable)
console.log(thirdVariable)
console.log(fourthVariable)
console.log(fifthVariable)
console.log(sixthVariable)
console.log(seventhVariable)
console.log(eighthVariable)
console.log(ninthVariable)
console.log(tenthVariable)
console.log(eleventhVariable)
console.log(twelfthVariable)
console.log(thirteenthVariable)
// Task 2: - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну
// person (Не об'єкт, просто за допомоги конкатенації)
const firstName = `Alexandr`;
const middleName = `Semenets`;
const lastName = `Mykolayovich`;
// const person = `${firstName} ${middleName} ${lastName}`;
// Task 3: - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль. let a = 100;
// let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
// Task 4: Додаткове для тих хто цікавився prompt`oм - За допомогою 3х різних prompt() отримати 3 слова які
// являються вашими Імям, По-Батькові та роками. та вивести в консоль
const firstName2 = prompt("Enter your first name");
const lastName2 = prompt("Enter your last name");
const year = prompt("Enter your age");
console.log("Name:" + firstName2)
console.log("Last name:" + lastName2)
console.log("Year:" + year)
//-----------------Або так, мені так більше подобається :) (одна змінна через шаблоні літерали приймає всі
// значення)---------
// const firstName2 = prompt();
// const lastName2 = prompt();
// const year = prompt();
// const person2 = `Your name: ${firstName2}, last name: ${lastName2}, year: ${year}`;
// console.log(person2)