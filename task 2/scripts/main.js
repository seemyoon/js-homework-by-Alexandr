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
let temperatureMondayMorning = 23;
let temperatureMondayAfternoon = 24;
let temperatureMondayNight = 21;
//Tuesday
let temperatureTuesdayMorning = 28;
let temperatureTuesdayAfternoon = 30;
let temperatureTuesdayNight = 20;
//Wednesday
let temperatureWednesdayMorning = 28;
let temperatureWednesdayAfternoon = 27;
let temperatureWednesdayNight = 23;
//Thursday
let temperatureThursdayMorning = 24;
let temperatureThursdayAfternoon = 29;
let temperatureThursdayNight = 19;
//Friday
let temperatureFridayMorning = 22;
let temperatureFridayAfternoon = 23;
let temperatureFridayNight = 19;
//Saturday
let temperatureSaturdayMorning = 24;
let temperatureSaturdayAfternoon = 32;
let temperatureSaturdayNight = 23;
//Sunday
let temperatureSundayMorning = 22;
let temperatureSundayAfternoon = 32;
let temperatureSundayNight = 19;

const temperatures = [{
    day: "monday",
    morning: temperatureMondayMorning + " degrees",
    afternoon: temperatureMondayAfternoon + " degrees",
    night: temperatureMondayNight + " degrees"
}, {
    day: "tuesday",
    morning: temperatureTuesdayMorning + " degrees",
    afternoon: temperatureTuesdayAfternoon + " degrees",
    night: temperatureTuesdayNight + " degrees"
}, {
    day: "wednesday",
    morning: temperatureWednesdayMorning + " degrees",
    afternoon: temperatureWednesdayAfternoon + " degrees",
    night: temperatureWednesdayNight + " degrees"
}, {
    day: "thursday",
    morning: temperatureThursdayMorning + " degrees",
    afternoon: temperatureThursdayAfternoon + " degrees",
    night: temperatureThursdayNight + " degrees"
}, {
    day: "friday",
    morning: temperatureFridayMorning + " degrees",
    afternoon: temperatureFridayAfternoon + " degrees",
    night: temperatureFridayNight + " degrees"
}, {
    day: "saturday",
    morning: temperatureSaturdayMorning + " degrees",
    afternoon: temperatureSaturdayAfternoon + " degrees",
    night: temperatureSaturdayNight + " degrees"
}, {
    day: "sunday",
    morning: temperatureSundayMorning + " degrees",
    afternoon: temperatureSundayAfternoon + " degrees",
    night: temperatureSundayNight + " degrees"
}
]
console.log(temperatures.length); //7 days
console.log(temperatures[0].morning) // for example first Monday morning of the first week equal 23, the second will
// change (next line can be temperatureMondayMorning = 24 and the value will change)

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".