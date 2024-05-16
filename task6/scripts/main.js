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
// or
const str10V2 = ' dirty string   ';
const newStr10V2 = str10V2.trim()
console.log(newStr10V2)
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
//     описати колоду карт (від 6 до туза без джокерів)
let cardSuits = ['spades', 'diamonds', 'hearts', 'clubs'];
let values = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
// - знайти піковий туз
const callback = (acc, card) => {
    values.forEach(cardValue => {
        let color;
        if (card === 'diamonds' || card === 'hearts') {
            color = "red"
        } else {
            color = "black"
        }
        acc.push({
            cardSuit: card,
            value: cardValue,
            color: color,

        })
    })
    return acc
}
const findCard = cardSuits.reduce(callback, [])

console.log(findCard)
const resultFindAceSpades = findCard.filter(findAceSpades => findAceSpades.cardSuit === "spades" && findAceSpades.value === "ace")
console.log(resultFindAceSpades)
// - всі шістки
const resultAllSixes = findCard.filter(findAllSixes => findAllSixes.value === 6)
console.log(resultAllSixes)
console.log(resultAllSixes.map(value3 => value3.value)) // only sixes
// - всі червоні карти
const resultAllRedCards = findCard.filter(findAllRedCards => findAllRedCards.color === "red")
console.log(resultAllRedCards)
console.log(resultAllRedCards.map(value4 => value4.color)) // only value "red"
// - всі буби
const resultAllDiamonds = findCard.filter(findAllDiamonds => findAllDiamonds.cardSuit === "diamonds")
console.log(resultAllDiamonds)
console.log(resultAllDiamonds.map(value5 => value5.cardSuit)) // only cardSuit
// - всі трефи від 9 та більше
const resultClubsFrom9AndMore = findCard.filter(findClubsFrom9AndMore => findClubsFrom9AndMore.cardSuit === "spades" && values.indexOf(findClubsFrom9AndMore.value) >= values.indexOf(9))
console.log(resultClubsFrom9AndMore)
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
const callback2 = ((acc, cardValue2) => {
    if (cardValue2.cardSuit === 'spades') {
        acc.spades.push(cardValue2)
    } else if (cardValue2.cardSuit === 'diamonds') {
        acc.diamonds.push(cardValue2)
    } else if (cardValue2.cardSuit === 'hearts') {
        acc.hearts.push(cardValue2)
    } else if (cardValue2.cardSuit === 'clubs') {
        acc.clubs.push(cardValue2)
    }
    return acc
})
const reduceCards = findCard.reduce(callback2, {spades: [], diamonds: [], hearts: [], clubs: []})
console.log(reduceCards)

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// console.log(coursesArray[5].modules.includes("sass"))
// console.log("------------------")
const result = (searchModule) => {
    return coursesArray.filter(course => course.modules.includes(searchModule))
}
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(result("sass"));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(result("docker"));



