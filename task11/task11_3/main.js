//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
const baseUrl = "http://jsonplaceholder.typicode.com"
const getUsers = baseUrl + "/users"
fetch(getUsers)
    .then(value => value.json())
    .then((users) => {
        // console.log(users)
        const divUsers = document.getElementsByClassName("users")[0]
        const ol = document.createElement("ol")
        divUsers.append(ol)
        for (const user of users) {
            // console.log(user)
            const li = document.createElement("li");
            const link = document.createElement("a");
            li.appendChild(link);
            link.setAttribute("href",`userLink/user-details.html?id=${user["id"]}`)
            link.innerHTML = `Id: ${user.id}; Name: ${user.name}`
            ol.appendChild(li)

        }
    })