// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const array = [3, false, "name", 34, 722, {name: "Alexandr", age: 23}, [62, true, "yellow"],
    1000, false, "Hello"]
console.log(array.length) // 10
console.log(typeof array[0]) // number
console.log(typeof array[1]) // boolean
console.log(typeof array[2]) // string
console.log(typeof array[3]) // number
console.log(typeof array[4]) // number
console.log(typeof array[5]) // object
console.log(typeof array[6]) // object
console.log(typeof array[7]) // number
console.log(typeof array[8]) // boolean
console.log(typeof array[9]) // string

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const bookOne = {
    title: "Harry Potter",
    pageCount: 400,
    genre: "fantastic"
}
const bookTwo = {
    title: "1984", // 1984 - string, because 1984 is title
    pageCount: 305,
    genre: "Dystopia"
}
const bookThree = {
    title: "Grokking Algorithms ",
    pageCount: 140,
    genre: "Computer science"
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
const book1 = {
    title: "The Mystery of the Lost Treasure",
    pageCount: 320,
    genre: "Mystery",
    authors: [{name: "John Smith", age: 45}, {name: "Emily Jones", age: 40}]
}
const book2 = {
    title: "Adventure in the Enchanted Fores",
    pageCount: 240,
    genre: "Fantasy",
    authors: [{name: "Sarah Brown", age: 38}, {name: "David Miller", age: 42}]
}
const book3 = {
    title: "Coding Adventures: A Journey Through Algorithms",
    pageCount: 200,
    genre: "Educational/Programming",
    authors: [{name: "Michael Lee", age: 35}, {name: "Jennifer Wang", age: 39}]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const users = [
    {
        name: "Alexandr",
        username: "alexandrlucky",
        password: "01i01iio01001", // string, because the password can not contain only type number. it's regard the
        // following objects too
    }, {
        name: "Petro",
        username: "pedro01",
        password: "12sdf456",
    }, {
        name: "Ivan",
        username: "ivanchik",
        password: "1er048",
    }, {
        name: "Kate",
        username: "kateflower",
        password: "ket2134",
    }, {
        name: "John",
        username: "johndoe85",
        password: "p@ssw0rd",
    }, {
        name: "Bob",
        username: "bob.smith",
        password: "secure123",
    }, {
        name: "Emma",
        username: "emma.davis",
        password: "3tr0ngP@ss",
    }, {
        name: "James",
        username: "james.wilson",
        password: "p@ssw0rd123",
    }, {
        name: "Olivia",
        username: "olivia.taylor",
        password: "safeP@ss!23",
    }, {
        name: "tom",
        username: "tom.grad",
        password: "protect3d",
    },
]
console.log(users.length)
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде
// одновимірний  масив з 21 значенням вичключаємо одразу
//Monday
const temperatures = [
    {
        day: "monday",
        morning: 23,
        afternoon: 24,
        night: 21
    },
    {
        day: "tuesday",
        morning: 28,
        afternoon: 30,
        night: 20
    },
    {
        day: "wednesday",
        morning: 28,
        afternoon: 27,
        night: 23
    },
    {
        day: "thursday",
        morning: 24,
        afternoon: 29,
        night: 19
    },
    {
        day: "friday",
        morning: 22,
        afternoon: 23,
        night: 19
    },
    {
        day: "saturday",
        morning: 24,
        afternoon: 32,
        night: 23
    },
    {
        day: "sunday",
        morning: 22,
        afternoon: 32,
        night: 19
    }
];

console.log(temperatures.length); //7 days
// Monday
temperatures[0].morning = 24;
temperatures[0].afternoon = 25;
temperatures[0].night = 28;

// Tuesday
temperatures[1].morning = 22;
temperatures[1].afternoon = 26;
temperatures[1].night = 27;

// Wednesday
temperatures[2].morning = 23;
temperatures[2].afternoon = 27;
temperatures[2].night = 26;

// Thursday
temperatures[3].morning = 21;
temperatures[3].afternoon = 25;
temperatures[3].night = 24;

// Friday
temperatures[4].morning = 20;
temperatures[4].afternoon = 24;
temperatures[4].night = 23;

// Saturday
temperatures[5].morning = 22;
temperatures[5].afternoon = 26;
temperatures[5].night = 25;

// Sunday
temperatures[6].morning = 23;
temperatures[6].afternoon = 25;
temperatures[6].night = 27;
// Third week is the same, just another value

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 23;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}

let a = 1;
if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}
a = 0;
if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}
a = -3;
if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
const time = 45;
if (time <= 15) {
    console.log("first part of hour")
} else if (time > 15 && time <= 30) {
    console.log("second part of hour")
} else if (time > 30 && time <= 45) {
    console.log("third part of hour")
} else if (time > 45 && time <= 59) {
    console.log("fourth part")
} else {
    console.log("the value more than 59")
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
const day = 23;
if (day <= 10) {
    console.log("first ten days of the month")
} else if (day > 10 && day <= 20) {
    console.log("second ten days of the month")
} else if (day > 20 && day <= 31) {
    console.log("third ten days of the month")
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let i = 1
// or like that (need to add ${}):
// let i = prompt("Enter the number from 1 to 5 to get the information of activities")
switch (i) {
    case 1:
        console.log("Learn IT language");
        break
    case 2:
        console.log("Do sport");
        break;
    case 3:
        console.log("Relax");
        break
    case 4:
        console.log("Learn English")
        break
    case 5:
        console.log("Go to sleep")
        break
    default:
        console.log("Enter the number from 1 to 5 to get the information of activities")
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
const valueUser1 = 5;
const valueUser2 = 14;
if (valueUser1 > valueUser2) {
    console.log("Your first value more than second")
} else if (valueUser1 < valueUser2) {
    console.log("Your second value more than second")
} else if (valueUser1 === valueUser2) {
    console.log("Your first value and the second equal each other")
} else {
    console.log("You have entered a wrong value")
}
//  - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//         (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x2 = NaN;
if (!x2) {
    x2 = "default"
}
console.log(x2)
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration >= 5) {
    console.log("It's super")
} else {
    console.log("It's bad")
}
if (coursesAndDurationArray[1].monthDuration >= 5) {
    console.log("It's super")
} else {
    console.log("It's bad")
}
if (coursesAndDurationArray[2].monthDuration >= 5) {
    console.log("It's super")
} else {
    console.log("It's bad")
}
if (coursesAndDurationArray[3].monthDuration >= 5) {
    console.log("It's super")
} else {
    console.log("It's bad")
}
if (coursesAndDurationArray[4].monthDuration >= 5) {
    console.log("It's super")
} else {
    console.log("It's bad")
}
if (coursesAndDurationArray[5].monthDuration >= 5) {
    console.log("It's super")
} else {
    console.log("It's bad")
}