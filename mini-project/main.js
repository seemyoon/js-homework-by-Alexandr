const baseUrl = "https://jsonplaceholder.typicode.com";
const getUsers = baseUrl + "/users";
fetch(getUsers)
    .then(value => value.json())
    .then((users) => {
        const divContainerInfo = document.getElementsByClassName("container-info")[0]
        users.forEach((user) => {
            const userDiv = document.createElement("div");
            divContainerInfo.appendChild(userDiv);
            const userH2 = document.createElement("h2");
            userDiv.appendChild(userH2)
            userH2.innerHTML = `Id: ${user.id}; Name: ${user.name}`
            const userBtn = document.createElement("button");
            userH2.after(userBtn);
            userBtn.innerText = `More details about ${user.name}`;
            userBtn.addEventListener("click", ()=>{
                window.location.href=`user-details/user-details.html?id=${user.id}`;
            })
        })
    })
