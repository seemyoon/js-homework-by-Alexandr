// Створити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const form = document.createElement("form");
document.body.appendChild(form);
const inputName = document.createElement("input");
inputName.setAttribute("name", "username");
inputName.setAttribute("type", "text");
const inputSurname = document.createElement("input");
inputSurname.setAttribute("name", "surname")
inputSurname.setAttribute("type", "text")
const inputAge = document.createElement("input");
inputAge.setAttribute("name", "age");
inputAge.setAttribute("type", "number");
const inputBtn = document.createElement("button");
inputBtn.setAttribute("id", "btn");
inputBtn.setAttribute("type", "submit");
inputBtn.innerHTML = "Submit";
form.append(inputName, inputSurname, inputAge, inputBtn)

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const div = document.createElement("div");
    div.classList.toggle("container")
    form.after(div)
    div.innerHTML = `Username: ${this.username.value}<br>Surname: ${this.surname.value}<br>Age: ${this.age.value}`;
})
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
const div2 = document.createElement("div");
div2.classList.add("container2")
form.after(div2);
let number = 1;
let numberValue = localStorage.getItem("count")
if (!numberValue) {
    localStorage.setItem("count", JSON.stringify(number));
} else if (numberValue) {
    const numberConvert = JSON.parse(numberValue)
    localStorage.setItem("count", numberConvert + 1);
}
const res = localStorage.getItem("count")
div2.innerHTML = `${res}`
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
const paragraph = document.createElement("p");
div2.after(paragraph);
const link = document.createElement("a");
link.setAttribute("href", "sessions.html");
paragraph.append(link)
link.innerText = "Click here and track your presence!"
const date = new Date().toDateString();
const timeConstructor = new Date().toTimeString();
const time = timeConstructor.substring(0, 8);
console.log(time)
console.log(date)
const obj ={date, time}
const track = JSON.parse(localStorage.getItem("trackTime")) || [];
track.push(obj);
localStorage.setItem("trackTime", JSON.stringify(track));
//  LOOK MAIN2.JS!!!!!!!!

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається