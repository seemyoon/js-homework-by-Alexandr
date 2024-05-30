// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
const div3 = document.createElement("div");
div3.classList.add("container")
document.body.appendChild(div3)
const money = 100
const currentTime = new Date().getTime() //  live (firstTime = 2s; secondTime = 10s)
console.log(currentTime)
let moneyValue = localStorage.getItem("money");
let timeStart = localStorage.getItem("timeUpdate"); //  2s -> LS (start time)
if (!moneyValue && !timeStart) {
    localStorage.setItem("timeUpdate", JSON.stringify(currentTime))
    localStorage.setItem("money", JSON.stringify(money))
} else {
    timeStart = JSON.parse(timeStart)
    moneyValue = JSON.parse(moneyValue)
    if (currentTime - timeStart > 4000) {
        moneyValue += 10;
        localStorage.setItem("money", JSON.stringify(moneyValue));
        localStorage.setItem("timeUpdate", JSON.stringify(currentTime));
    }
}
const moneyValue2 = localStorage.getItem("money");

const p = document.createElement('p')
div3.appendChild(p)
p.innerText = moneyValue2