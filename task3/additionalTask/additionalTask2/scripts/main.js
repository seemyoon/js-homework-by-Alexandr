console.log("start")
// --створити масив з:
// - з 5 числових значень
const array1 = [132, 2132, 33, 44, 53353];
// - з 5 стічкових значень
const array2 = ["Alexandr", "Ivan", "Max", "Andrew", "Petro"];
// - з 5 значень стрічкового, числового та булевого типу
const array3 = [32, "Ivan", false, "game", 98];
// - та вивести його в консоль
console.log(array1)
console.log(array2)
console.log(array3)
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const array4 = [];
array4[0] = false
array4[1] = "salad"
array4[2] = 82
array4[3] = 27
array4[4] = true
console.log(array4)
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
const array5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
let i = 0;
while (i < array5.length) {
    console.log(array5[i])
    i++
}
// 2. перебрати його циклом for
for (let j = 0; j < array5.length; j++) {
    console.log(array5[j])
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let x = 0;
while (x < array5.length) {
    if (x % 2) {
        console.log(array5[x])
    }
    x++
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let y = 0; y < array5.length; y++) {
    if (y % 2) {
        console.log(array5[y])
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let z = 0;
while (z < array5.length) {
    if (!(array5[z] % 2)) {
        console.log(array5[z])
    }
    z++
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let q = 0; q < array5.length; q++) {
    if (!(array5[q] % 2)) {
        console.log(array5[q])
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (const value of array5) {
    if (!(value % 3)) {
        console.log(value)
    }
}
// 8. вивести масив в зворотньому порядку.
const newArray = [];
for (let n = array5.length - 1; n > 0; n--) {
    const changeArray = array5[n]
    console.log(changeArray)
    newArray.push(changeArray)
}
console.log(newArray)
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1
let i2 = array5.length - 1;
while (i2 >= 0) {
    console.log(array5[i2])
    i2--
}
// 2
for (let j2 = array5.length - 1; j2 >= 0; j2--) {
    console.log(array5[j2])
}
// 3
let x2 = array5.length - 1;
while (x2 > 0) {
    if (x2 % 2) {
        console.log(array5[x2])
    }
    x2--
}
// 4
for (let y = array5.length - 1; y > 0; y--) {
    if (y % 2) {
        console.log(array5[y])
    }
}
// 5
let z2 = array5.length - 1;
while (z2 >= 0) {
    if (!(array5[z2] % 2)) {
        console.log(array5[z2])
    }
    z2--
}
// 6
for (let q2 = array5.length - 1; q2 >= 0; q2--) {
    if (!(array5[q2] % 2)) {
        console.log(array5[q2])
        console.log(q2)
    }
}
// 7
for (const value of array5) {
    if (!(value % 3)) {
        console.log(value)
    }
}
for (let value = array5.length - 1; value >= 0; value--) {
    if (!(value % 3)) {
        console.log(array5[value])
    }
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const numbersArray = [42, 3.14, 100, -5, 0, 1.618, -273, 7.777, 123456789, -987654321];
for (const number of numbersArray) {
    console.log(number)
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const stringsArray = [
    "Hello",
    "World",
    "OpenAI",
    "JavaScript",
    "Programming",
    "Language",
    "Model",
    "ChatGPT",
    "String",
    "Array"
];
for (const stringValue of stringsArray) {
    console.log(stringValue)
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const mixedArray = [
    42,
    "Hello, world!",
    true,
    {name: "John", age: 30},
    [1, 2, 3],
    null,
    undefined,
    23,
    true,
    "Coding"
];

for (const mixedArrayElement of mixedArray) {
    console.log(mixedArrayElement)
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
const mixedArray2 = [
    42,
    "Hello, world!",
    true,
    3.14,
    "JavaScript",
    false,
    -10,
    "OpenAI",
    true,
    0
];
for (const mixedArray2Element of mixedArray2) {
    if (typeof mixedArray2Element === "boolean") {
        console.log(mixedArray2Element)
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const mixedArray2Element of mixedArray2) {
    if (typeof mixedArray2Element === "number") {
        console.log(mixedArray2Element)
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const mixedArray2Element of mixedArray2) {
    if (typeof mixedArray2Element === "string") {
        console.log(mixedArray2Element)
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
const array6 = [];
array6[0] = "Jack";
array6[1] = 42;
array6[2] = true;
array6[3] = {name: "John", age: 30};
array6[4] = [1, 2, 3];
array6[5] = null;
array6[6] = undefined;
array6[7] = false;
array6[8] = 45;
array6[9] = "Hello";

for (const array6Element of array6) {
    console.log(array6Element)
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i)
    document.write(`${i} `)

}
document.write("<br>") // my additional
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i)
    document.write(`${i} `)
}
document.write("<br>") // my additional
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i = i + 2) {
    console.log(i)
    document.write(`${i} `)
}
document.write("<br>") // my additional
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (!(i % 2)) {
        console.log(i)
    }
    if (!(i % 2)) {
        document.write(`${i} `)
    }

}
document.write("<br>") // my additional
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2) {
        console.log(i)
    }
    if (i % 2) {
        document.write(`${i} `)
    }

}
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
const books = [
    {
        title: "The Great Gatsby",
        pageCount: 180,
        authors: ["F. Scott Fitzgerald"],
        genres: ["Fiction", "Classics"]
    },
    {
        title: "To Kill a Mockingbird",
        pageCount: 281,
        authors: ["Harper Lee"],
        genres: ["Fiction", "Classics"]
    },
    {
        title: "1984",
        pageCount: 328,
        authors: ["George Orwell"],
        genres: ["Fiction", "Dystopian"]
    },
    {
        title: "The Catcher in the Rye",
        pageCount: 277,
        authors: ["J.D. Salinger"],
        genres: ["Fiction", "Coming-of-age"]
    }
];
// -знайти наібльшу книжку.

const result = books[1].pageCount
// console.log(result
for (const book of books) {
    console.log(book.pageCount)
}
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор