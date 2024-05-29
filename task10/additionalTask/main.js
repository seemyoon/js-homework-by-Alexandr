// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
const div3 = document.createElement("div");
div3.classList.add("container")
document.body.appendChild(div3)
const money = 100
let moneyValue = localStorage.getItem("money");
if (!moneyValue) {
    localStorage.setItem("money", JSON.stringify(money))
} else if (moneyValue) {
    const moneyConvert = JSON.parse(moneyValue)
    localStorage.setItem("money", moneyConvert + 10)
}
const p = document.createElement('p')
div3.appendChild(p)
setTimeout(() => {
    p.innerText = localStorage.getItem("money");
}, 10000)