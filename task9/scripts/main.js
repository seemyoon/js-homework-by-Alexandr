// - створити блок,
const htmlDivElement = document.createElement("div");
// - додати йому класи wrap, collapse, alpha, beta
htmlDivElement.classList.add("wrap");
htmlDivElement.classList.add("collapse");
htmlDivElement.classList.add("alpha");
htmlDivElement.classList.add("beta");
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
htmlDivElement.style.border = "4px solid black"
htmlDivElement.style.backgroundColor = "burlywood"
htmlDivElement.style.height = "100vh"
// - додати цей блок в body.
document.body.appendChild(htmlDivElement);
// - клонувати його повністю, та додати клон в body.
const cloneHtmlDivElement = htmlDivElement.cloneNode()
document.body.appendChild(cloneHtmlDivElement)
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const ul = document.createElement("ul");
document.body.appendChild(ul);
const array = ['Main', 'Products', 'About us', 'Contacts'];
for (const string of array) {
    let li = document.createElement("li");
    ul.append(li.innerText = string)
}
// - Є масив
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
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    const block = document.createElement("div");
    const blockInHtml = document.body.appendChild(block)
    const h2 = document.createElement("h2");
    const h2InHtml = document.body.appendChild(h2);
    const p = document.createElement("p");
    const pInHtml = document.body.appendChild(p)
    const title = h2InHtml.innerText = coursesAndDurationArrayElement.title;
    const monthDuration = pInHtml.innerText = coursesAndDurationArrayElement.monthDuration;
    blockInHtml.append(title, monthDuration)
}

// =========================
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const coursesAndDurationArrayElement2 of coursesAndDurationArray2) {
    const block = document.createElement("div");
    const blockInHtml = document.body.appendChild(block)
    blockInHtml.classList.add('item')
    const h1 = document.createElement("h1");
    const h1InHtml = document.body.appendChild(h1);
    h1InHtml.classList.add("heading");
    const p = document.createElement("p");
    const pInHtml = document.body.appendChild(p)
    pInHtml.classList.add("description");
    const title = h1InHtml.innerText = coursesAndDurationArrayElement2.title;
    const monthDuration = pInHtml.innerText = coursesAndDurationArrayElement2.monthDuration;
    blockInHtml.append(title, monthDuration)
}
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
for (const simpson of simpsons) {
    document.createElement("div");
    const h2 = document.createElement("h2");
    const h2InHtml = document.body.appendChild(h2);
    const h2Second = document.createElement("h2");
    const h2InHtmlSecond = document.body.appendChild(h2Second);
    const p = document.createElement("p");
    const pHtml = document.body.appendChild(p);
    const pSecond = document.createElement("p");
    const pHtmlSecond = document.body.appendChild(pSecond);
    const img = document.createElement("img");
    img.setAttribute("src", simpson.photo)
    document.body.appendChild(img);
    h2InHtml.innerText = "Name:" + simpson.name
    h2InHtmlSecond.innerText = "Surname:" + simpson.surname
    pHtml.innerText = "Age:" + simpson.age
    pHtmlSecond.innerText = "Info:" + simpson.info
}
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
for (const coursesArrayElement of coursesArray) {
    const divMain = document.createElement("div");
    const divMainInHtml = document.body.appendChild(divMain);
    divMainInHtml.classList.add("blockStyle")

    const divTitle = document.createElement("div");
    const divTitleInHtml = divMainInHtml.appendChild(divTitle);
    divTitleInHtml.classList.add("titleStyle")

    const divMonthDuration = document.createElement("div");
    const divMonthDurationInHtml = divMainInHtml.appendChild(divMonthDuration);
    divMonthDurationInHtml.classList.add("monthDurationStyle")

    const divHourDuration = document.createElement("div");
    const divHourDurationInHtml = divMainInHtml.appendChild(divHourDuration);
    divHourDurationInHtml.classList.add("hourDurationStyle")

    const divModules = document.createElement("ul");
    const divModulesInHtml = divMainInHtml.appendChild(divModules);
    divModulesInHtml.classList.add("modulesStyle")

    const title = document.createElement("h1");
    const titleInHtml = divTitleInHtml.appendChild(title);
    titleInHtml.innerText = "Course: " + coursesArrayElement.title;

    const monthDuration = document.createElement("h2");
    const monthDurationInHtml = divMonthDurationInHtml.appendChild(monthDuration);
    monthDurationInHtml.innerText = "Month duration: " + coursesArrayElement.monthDuration;

    const hourDuration = document.createElement("h2");
    const hourDurationInHtml = divHourDurationInHtml.appendChild(hourDuration);
    hourDurationInHtml.innerText = "Hour duration: " + coursesArrayElement.hourDuration;

    for (const module of coursesArrayElement.modules) {
        const moduleCourse = document.createElement("li");
        moduleCourse.classList.add("modulesItemStyle")
        const hourDurationInHtml = divModulesInHtml.appendChild(moduleCourse);
        hourDurationInHtml.innerText = module;
    }
}