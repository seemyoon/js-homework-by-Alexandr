// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
const str1 = 'hello world';
console.log(str1.length)
const str2 = 'lorem ipsum';
console.log(str2.length)
const str3 = 'javascript is cool';
console.log(str3.length)
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
const str4 = 'hello world';
console.log(str4.toUpperCase())
const str5 = 'lorem ipsum';
console.log(str5.toUpperCase())
const str6 = 'javascript is cool';
console.log(str6.toUpperCase())
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const str7 = 'HELLO WORLD';
console.log(str7.toLowerCase())
const str8 = 'LOREM IPSUM';
console.log(str8.toLowerCase())
const str9 = 'JAVASCRIPT IS COOL';
console.log(str9.toLowerCase())
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
const str10 = ' dirty string   '
const str10WithoutSpaces = str10.split(' ')
const newStr10 = `${str10WithoutSpaces[1]} ${str10WithoutSpaces[2]}`
console.log(newStr10)
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
let arr = str.split(" ");
console.log(arr)
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const arr2 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const newArr2 = arr2.map((element) => {
    return `${element}`;
})
console.log(newArr2)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];
const sortNums = (arr, sort) => {
    if (sort === "ascending") {
        return arr.sort((number1, number2) => number1 - number2);
    } else if (sort === "descending") {
        return arr.sort((number1, number2) => number2 - number1);

    } else {
        console.log("Error")
    }
}
console.log(sortNums(nums, "ascending"));
console.log(sortNums(nums, "descending"));
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
const sortArr = coursesAndDurationArray.sort((course1, course2) => course2.monthDuration - course1.monthDuration)
console.log(sortArr)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filterArr = coursesAndDurationArray.filter((course) => course.monthDuration >= 5)
console.log(filterArr)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const mapArr = coursesAndDurationArray.map((course, index) => course.id = index++)
console.log(mapArr)
console.log(coursesAndDurationArray)
// =========================
const decks = [
    {
        cardSuit: "Hearts",
        color: "Red",
        cards: ["6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    },
    {
        cardSuit: "Diamonds",
        color: "Red",
        cards: ["6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    },
    {
        cardSuit: "Clubs",
        color: "Black",
        cards: ["6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    },
    {
        cardSuit: "Spades",
        color: "Black",
        cards: ["6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    }
];

// console.log(decks);
// const search = arr.forEach()
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
const findAceSpades = decks.filter((card) => card.cardSuit === "Spades" &&  card.cards === "Ace")
console.log(findAceSpades)
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker