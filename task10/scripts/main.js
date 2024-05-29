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
const div = document.createElement("div");
div.classList.toggle("container")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (document.body.contains(div)) {
        div.remove()
    }
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
const obj = {date, time}
const track = JSON.parse(localStorage.getItem("trackTime")) || [];
track.push(obj);
localStorage.setItem("trackTime", JSON.stringify(track));
//  LOOK MAIN2.JS!!!!!!!!

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
const arrUsers = [
    {name: "User1", age: 25, skills: ["js", "html/css"]},
    {name: "User2", age: 30, skills: ["python", "django"]},
    {name: "User3", age: 35, skills: ["java", "spring"]},
    {name: "User4", age: 28, skills: ["react", "node.js"]},
    {name: "User5", age: 32, skills: ["c#", ".net"]},
    {name: "User6", age: 27, skills: ["go", "docker"]},
    {name: "User7", age: 29, skills: ["ruby", "rails"]},
    {name: "User8", age: 33, skills: ["js", "html/css"]},
    {name: "User9", age: 31, skills: ["python", "django"]},
    {name: "User10", age: 26, skills: ["java", "spring"]},
    {name: "User11", age: 34, skills: ["react", "node.js"]},
    {name: "User12", age: 29, skills: ["c#", ".net"]},
    {name: "User13", age: 35, skills: ["go", "docker"]},
    {name: "User14", age: 28, skills: ["ruby", "rails"]},
    {name: "User15", age: 32, skills: ["js", "html/css"]},
    {name: "User16", age: 30, skills: ["python", "django"]},
    {name: "User17", age: 27, skills: ["java", "spring"]},
    {name: "User18", age: 34, skills: ["react", "node.js"]},
    {name: "User19", age: 25, skills: ["c#", ".net"]},
    {name: "User20", age: 31, skills: ["go", "docker"]},
    {name: "User21", age: 29, skills: ["ruby", "rails"]},
    {name: "User22", age: 32, skills: ["js", "html/css"]},
    {name: "User23", age: 28, skills: ["python", "django"]},
    {name: "User24", age: 26, skills: ["java", "spring"]},
    {name: "User25", age: 34, skills: ["react", "node.js"]},
    {name: "User26", age: 27, skills: ["c#", ".net"]},
    {name: "User27", age: 35, skills: ["go", "docker"]},
    {name: "User28", age: 33, skills: ["ruby", "rails"]},
    {name: "User29", age: 25, skills: ["js", "html/css"]},
    {name: "User30", age: 31, skills: ["python", "django"]},
    {name: "User31", age: 32, skills: ["java", "spring"]},
    {name: "User32", age: 28, skills: ["react", "node.js"]},
    {name: "User33", age: 29, skills: ["c#", ".net"]},
    {name: "User34", age: 34, skills: ["go", "docker"]},
    {name: "User35", age: 26, skills: ["ruby", "rails"]},
    {name: "User36", age: 30, skills: ["js", "html/css"]},
    {name: "User37", age: 33, skills: ["python", "django"]},
    {name: "User38", age: 25, skills: ["java", "spring"]},
    {name: "User39", age: 32, skills: ["react", "node.js"]},
    {name: "User40", age: 31, skills: ["c#", ".net"]},
    {name: "User41", age: 28, skills: ["go", "docker"]},
    {name: "User42", age: 35, skills: ["ruby", "rails"]},
    {name: "User43", age: 27, skills: ["js", "html/css"]},
    {name: "User44", age: 34, skills: ["python", "django"]},
    {name: "User45", age: 26, skills: ["java", "spring"]},
    {name: "User46", age: 30, skills: ["react", "node.js"]},
    {name: "User47", age: 33, skills: ["c#", ".net"]},
    {name: "User48", age: 29, skills: ["go", "docker"]},
    {name: "User49", age: 25, skills: ["ruby", "rails"]},
    {name: "User50", age: 31, skills: ["js", "html/css"]},
    {name: "User51", age: 28, skills: ["python", "django"]},
    {name: "User52", age: 34, skills: ["java", "spring"]},
    {name: "User53", age: 30, skills: ["react", "node.js"]},
    {name: "User54", age: 26, skills: ["c#", ".net"]},
    {name: "User55", age: 33, skills: ["go", "docker"]},
    {name: "User56", age: 32, skills: ["ruby", "rails"]},
    {name: "User57", age: 27, skills: ["js", "html/css"]},
    {name: "User58", age: 31, skills: ["python", "django"]},
    {name: "User59", age: 25, skills: ["java", "spring"]},
    {name: "User60", age: 29, skills: ["react", "node.js"]},
    {name: "User61", age: 35, skills: ["c#", ".net"]},
    {name: "User62", age: 28, skills: ["go", "docker"]},
    {name: "User63", age: 34, skills: ["ruby", "rails"]},
    {name: "User64", age: 30, skills: ["js", "html/css"]},
    {name: "User65", age: 27, skills: ["python", "django"]},
    {name: "User66", age: 26, skills: ["java", "spring"]},
    {name: "User67", age: 32, skills: ["react", "node.js"]},
    {name: "User68", age: 31, skills: ["c#", ".net"]},
    {name: "User69", age: 33, skills: ["go", "docker"]},
    {name: "User70", age: 29, skills: ["ruby", "rails"]},
    {name: "User71", age: 25, skills: ["js", "html/css"]},
    {name: "User72", age: 34, skills: ["python", "django"]},
    {name: "User73", age: 28, skills: ["java", "spring"]},
    {name: "User74", age: 30, skills: ["react", "node.js"]},
    {name: "User75", age: 32, skills: ["c#", ".net"]},
    {name: "User76", age: 29, skills: ["go", "docker"]},
    {name: "User77", age: 33, skills: ["ruby", "rails"]},
    {name: "User78", age: 27, skills: ["js", "html/css"]},
    {name: "User79", age: 31, skills: ["python", "django"]},
    {name: "User80", age: 25, skills: ["java", "spring"]},
    {name: "User81", age: 34, skills: ["react", "node.js"]},
    {name: "User82", age: 28, skills: ["c#", ".net"]},
    {name: "User83", age: 32, skills: ["go", "docker"]},
    {name: "User84", age: 30, skills: ["ruby", "rails"]},
    {name: "User85", age: 26, skills: ["js", "html/css"]},
    {name: "User86", age: 29, skills: ["python", "django"]},
    {name: "User87", age: 31, skills: ["java", "spring"]},
    {name: "User88", age: 33, skills: ["react", "node.js"]},
    {name: "User89", age: 25, skills: ["c#", ".net"]},
    {name: "User90", age: 32, skills: ["go", "docker"]},
    {name: "User91", age: 30, skills: ["ruby", "rails"]},
    {name: "User92", age: 27, skills: ["js", "html/css"]},
    {name: "User93", age: 31, skills: ["python", "django"]},
    {name: "User94", age: 25, skills: ["java", "spring"]},
    {name: "User95", age: 34, skills: ["react", "node.js"]},
    {name: "User96", age: 28, skills: ["c#", ".net"]},
    {name: "User97", age: 32, skills: ["go", "docker"]},
    {name: "User98", age: 30, skills: ["ruby", "rails"]},
    {name: "User99", age: 26, skills: ["js", "html/css"]},
    {name: "User100", age: 29, skills: ["python", "django"]}
];
console.log(arrUsers)
const quantityObj = 10;
const allPages = arrUsers.length / quantityObj;
let currentPage = 0;
const listUsers = document.querySelector(".listUsers");
const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");

function displayObjects() {
    const startIndex = currentPage * quantityObj;
    const endIndex = startIndex + quantityObj;
    const quantityObjOnPage = arrUsers.slice(startIndex, endIndex)

    listUsers.innerHTML = "";

    quantityObjOnPage.forEach(user => {
        const li = document.createElement("li");
        li.innerHTML = `Name: ${user.name} Age: ${user.age} Skills: ${user.skills[0]} and ${user.skills[1]}`;
        listUsers.appendChild(li);
    })

}
//
document.addEventListener("DOMContentLoaded", () => displayObjects())
btnPrev.addEventListener("click", () => {
    currentPage--
    if(currentPage <0){
        currentPage = allPages -1
    }
    displayObjects()
})
btnNext.addEventListener("click", () => {
    currentPage++
    if (currentPage >= allPages) {
        currentPage = 0;
    }
    displayObjects()
})
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const h1 = document.createElement("h1");
h1.innerText = "Healing of level 1"
const someBtn = document.createElement("button");
paragraph.after(h1);
h1.after(someBtn);
someBtn.innerText = "Remove element"
h1.setAttribute("id", "text");
someBtn.addEventListener("click", function () {
    h1.remove()
})
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const inputAge2 = document.createElement("input")
someBtn.after(inputAge2)
inputAge2.setAttribute("type", "number")

const btnAge = document.createElement("button");
btnAge.innerHTML = "Check"
inputAge2.after(btnAge)
btnAge.addEventListener("click", function () {
    if (inputAge2.value < 18 && inputAge2.value != "" && inputAge2.value != null) {
        const p = document.createElement("p");
        btnAge.after(p)
        p.innerText = "No entry, you're young"
    } else if (inputAge2.value > 18 && inputAge2.value != "" && inputAge2.value != null) {
        const p = document.createElement("p");
        btnAge.after(p)
        p.innerText = "Good, you can see content"
    } else {
        const p = document.createElement("p");
        btnAge.after(p)
        p.innerText = "Error, perhaps your input was empty"
        setTimeout(() => {
            p.remove()
        }, 4000)
    }
})
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const inputQuantityRow = document.createElement("input");
btnAge.after(inputQuantityRow)
inputQuantityRow.setAttribute("type", "number")
const inputQuantityCells = document.createElement("input");
inputQuantityRow.after(inputQuantityCells)
inputQuantityCells.setAttribute("type", "number")
const inputContent = document.createElement("input");
inputQuantityCells.after(inputContent)
inputContent.setAttribute("type", "text")
const btn4 = document.createElement("button");
inputContent.after(btn4)
btn4.innerText = "Let's create!"
btn4.addEventListener("click", function () {
    if (inputQuantityRow.value && inputQuantityCells.value && inputContent.value) {
        const table = document.createElement("table");
        table.setAttribute("border", "1px solid black");
        btn4.after(table)
        for (let i = 0; i < inputQuantityRow.value; i++) {
            const tr = document.createElement("tr");
            table.appendChild(tr);
            for (let i = 0; i < inputQuantityCells.value; i++) {
                const td = document.createElement("td");
                tr.appendChild(td);
                td.innerText = inputContent.value;
            }
        }
    } else {
        const p = document.createElement("p");
        btn4.after(p)
        p.innerText = "Error, perhaps your some of inputs was empty"
        setTimeout(() => {
            p.remove()
        }, 4000)
    }
})
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//!!! LOOK ADDITIONALTASK10.HTML