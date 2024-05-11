// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    return a * b
}

console.log(square(3, 4))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function square2(pi, radius) {
    const radiusSquared = radius ** 2
    const square = pi * radiusSquared
    // console.log(square)
    return {radiusSquared, square}
}

const result = square2(Math.floor((Math.PI) * 100) / 100, 5)
console.log(result);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// 2πR(H + R)
function square3(h, r, pi) {
    const height = h;
    const radius = r;
    const piValue = pi;
    const square = 2 * pi * r * (h + r)
    return {square, height, radius, piValue}
}

const result2 = square3(7, 3, Math.floor((Math.PI) * 100) / 100);
console.log(result2)
// - створити функцію яка приймає масив та виводить кожен його елемент
const mixedArray = [42, "Hello, world!", true, {name: "John", age: 30}, [1, 2, 3], null, undefined,];
const arrFunc = (array) => {
    for (const mixedArrayElement of array) {
        console.log(mixedArrayElement);
    }
}
arrFunc(mixedArray);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const textFunc = (text) => {
    document.write(`<p>${text}</p>`)
}
textFunc("My name is John")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const liFunc = (text) => {
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `)
}
liFunc("Some text")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const liFunc2 = (text, quantity) => {
    document.write("<ul>")
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write("</ul>")
}
liFunc2("Cool", 20)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const mixedArray2 = [42, "Hello, world!", true, false, "JavaScript", 234, 1276];
const liFunc3 = (array) => {
    document.write("<ul>")
    for (const elem of array) {
        document.write(`<li>${elem}</li>`)
    }
    document.write("</ul>")
}
liFunc3(mixedArray2)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const usersArray = [{id: 1, name: "John", age: 30}, {id: 2, name: "Alice", age: 25}, {
    id: 3, name: "Bob", age: 35
}, {id: 4, name: "Emily", age: 28}, {id: 5, name: "Michael", age: 40}];
const userFunc = (users) => {
    for (const user of users) {
        document.write(`
            <div>
                <h2>Id: ${user.id}</h2>
                <h2>Name: ${user.name}</h2>
                <h2>Age: ${user.age}</h2>
            </div>
                `)
    }
}
userFunc(usersArray)
// - створити функцію яка повертає найменьше число з масиву
const numbersArray = [10, 25, 37, 42, 56];
let numArr2 = numbersArray[0];
const numberFunc = () => {
    for (const numberArray of numbersArray) {
        console.log(numberArray)
        if (numberArray < numArr2) {
            numArr2 = numberArray
        }
    }
    return numArr2
}
console.log(numberFunc())
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// array is above
const arr = [1, 2, 10];

function sum(array) {
    let newNumberArray = 0;
    console.log(newNumberArray)
    for (let numberArray of array) {
        newNumberArray += numberArray
        console.log(numberArray = +numberArray)
    }
    return newNumberArray
}

console.log(sum(arr))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const arraySwap = [11, 22, 33, 44];

function swap(arr, index1, index2) {
    let temporaryValue = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temporaryValue;
    return arr
}

swap(arraySwap, 0, 1)
console.log(arraySwap)
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let userEnter = 0;
    while (userEnter < currencyValues.length) {
        if (currencyValues[userEnter].currency === exchangeCurrency) {
            return console.log(sumUAH / currencyValues[userEnter].value + " " + exchangeCurrency)
        }
        userEnter++
    }
    // if ('USD' === exchangeCurrency) {
    //     return console.log(sumUAH / currencyValues[0].value + " " + exchangeCurrency)
    // } else if ('EUR' === exchangeCurrency) {
    //
    //     return console.log(sumUAH / currencyValues[1].value + " " + exchangeCurrency)
    // } else {
    //     console.log("Error")
    // }
    // for (let i = 0; i < sumUAH.length; i++) {
    //     const sumUAHElement = sumUAH[i];
    //
    // }
    // console.log(currencyValues.length)
}

exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD');
