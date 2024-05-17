// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const user1 = new User(1, "Alexandr", "Velikiy", "1@example.com", 80671234567);
const user2 = new User(2, "Olena", "Petrenko", "2@example.com", 80671234568);
const user3 = new User(3, "Ivan", "Ivanov", "3@example.com", 80671234569);
const user4 = new User(4, "Maria", "Petrova", "4@example.com", 80671234570);
const user5 = new User(5, "Sergiy", "Kovalenko", "5@example.com", 80671234571);
const user6 = new User(6, "Natalia", "Stepanova", "6@example.com", 80671234572);
const user7 = new User(7, "Petro", "Sidorov", "7@example.com", 80671234573);
const user8 = new User(8, "Anna", "Vasileva", "8@example.com", 80671234574);
const user9 = new User(9, "Dmytro", "Kovalchuk", "9@example.com", 80671234575);
const user10 = new User(10, "Yuliya", "Kovalenko", "10@example.com", 80671234576);
const arrUsers = Array(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

console.log(arrUsers)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filter = arrUsers.filter(user => user.id % 2 === 0);
console.log(filter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sort = arrUsers.sort((user1, user2) => user1.id - user2.id);
console.log(sort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const client1 = new Client(1, "Alexandr", "Velikiy", "1@example.com", 80671234567, ["potato", "tomato", "grapes", "milk", "eggs"]);
const client2 = new Client(2, "Olena", "Petrenko", "2@example.com", 80671234568, ["bread"]);
const client3 = new Client(3, "Ivan", "Ivanov", "3@example.com", 80671234569, ["chicken", "beef", "fish"]);
const client4 = new Client(4, "Maria", "Petrova", "4@example.com", 80671234570, ["apple", "orange"]);
const client5 = new Client(5, "Sergiy", "Kovalenko", "5@example.com", 80671234571, ["cheese", "yogurt", "cookies", "chocolate"]);
const client6 = new Client(6, "Natalia", "Stepanova", "6@example.com", 80671234572, ["rice", "pasta", "spaghetti", "orange"]);
const client7 = new Client(7, "Petro", "Sidorov", "7@example.com", 80671234573, ["soup", "salad", "sandwich"]);
const client8 = new Client(8, "Anna", "Vasileva", "8@example.com", 80671234574, ["cake"]);
const client9 = new Client(9, "Dmytro", "Kovalchuk", "9@example.com", 80671234575, ["tea", "juice"]);
const client10 = new Client(10, "Yuliya", "Kovalenko", "10@example.com", 80671234576, ["water", "soda"]);

const arrClients = Array(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log(arrClients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sort2 = arrClients.sort((client1, client2) => client2.order.length - client1.order.length);
console.log(sort2)
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log("===================")

function Car(model, manufacture, yearOfManufacture, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacture = manufacture;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
}

Car.prototype.info = function () {
    return `Model - ${this.model}; Manufacture - ${this.manufacture}; Year of manufacture = ${this.yearOfManufacture}; Max speed = ${this.maxSpeed}; Engine capacity = ${this.engineCapacity};`
};
Car.prototype.drive = function () {
    return console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
}
Car.prototype.increaseMaxSpeed = function (newSpeed) {
    return this.maxSpeed + newSpeed
}
Car.prototype.changeYear = function (newValue) {
    return this.yearOfManufacture = newValue
}
Car.prototype.addDriver = function (driver) {
    return driver
}
const car = new Car("Civic", "Honda", 2019, 200, 1.5)
car.drive()
console.log(car.info());
console.log(car.increaseMaxSpeed(20));
console.log(car.changeYear(2020))
car.addDriver({name: "John", surname: "Smith", age: 35, licenseNumber: "ABC123456", experienceYears: 15})

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, manufacture, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacture = manufacture;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
}

Car2.prototype.info = function () {
    return `Model - ${this.model}; Manufacture - ${this.manufacture}; Year of manufacture = ${this.yearOfManufacture}; Max speed = ${this.maxSpeed}; Engine capacity = ${this.engineCapacity};`
};
Car2.prototype.drive = function () {
    return console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
}
Car2.prototype.increaseMaxSpeed = function (newSpeed) {
    return this.maxSpeed + newSpeed
}
Car2.prototype.changeYear = function (newValue) {
    return this.yearOfManufacture = newValue
}
Car2.prototype.addDriver = function (driver) {
    return driver
}
const car2 = new Car2("Civic", "Honda", 2019, 200, 1.5)
car2.drive()
console.log(car2.info());
console.log(car2.increaseMaxSpeed(20));
console.log(car2.changeYear(2021))
car2.addDriver({name: "John", surname: "Smith", age: 35, licenseNumber: "ABC123456", experienceYears: 15})

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const Cinderella1 = new Cinderella("Maria", 22, 35);
const Cinderella2 = new Cinderella("Anna", 20, 34);
const Cinderella3 = new Cinderella("Katherine", 23, 37);
const Cinderella4 = new Cinderella("Elena", 21, 38);
const Cinderella5 = new Cinderella("Julia", 24, 36);
const Cinderella6 = new Cinderella("Victoria", 25, 35);
const Cinderella7 = new Cinderella("Natalie", 26, 37);
const Cinderella8 = new Cinderella("Irina", 20, 38);
const Cinderella9 = new Cinderella("Daria", 22, 36);
const Cinderella10 = new Cinderella("Sophia", 23, 35);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// Cinderella.prototype.prince = function (namePrince = "Alexandr", agePrince = 23, shoe = 34) {
//     return {namePrince: namePrince, agePrince: agePrince, shoe: shoe}
//
// }
class Prince {
    constructor(namePrince, agePrince, shoe) {
        this.namePrince = namePrince;
        this.agePrince = agePrince;
        this.shoe = shoe;
    }
}

const prince1 = new Prince("Alexandr", 23, 34);
console.log(prince1)


const arrayCinderella = Array(Cinderella1, Cinderella2, Cinderella3, Cinderella4, Cinderella5, Cinderella6, Cinderella7, Cinderella8, Cinderella9, Cinderella10);
for (const cinderella of arrayCinderella) {
    if (prince1.shoe === cinderella.footSize) {
        console.log(`${cinderella.name} is cinderella for prince ${prince1.namePrince}`);
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const cinderellaWinner = arrayCinderella.find(cinderella => cinderella.footSize === prince1.shoe)
console.log(cinderellaWinner)
// Через Array.prototype. створити власний foreach, filter, map
//forEach
const array6 = [3124, 645, 678, 9, "right", "left"]
Array.prototype.customForEach = function (callback) {
    for (const item of this) {
        callback(item)
    }
}
array6.customForEach(item => console.log(item));
//filter
Array.prototype.customFilter = function (callback) {
    const arr = []
    for (const item of this) {
        if (callback(item)) {
            arr.push(item)
        }
    }
    return arr
}
array6.customFilter(item => typeof item === "string");
//map
const array7 = [3124, 645, 648, 10]
Array.prototype.customMap = function (callback) {
    const arr = []
    for (const item of this) {
        arr.push(callback(item))
    }
    return arr
}
const res = array7.customMap(item => item/2);
console.log(res)