// const urlLocalParams = new URLSearchParams(window.location.search);
// const userId = urlLocalParams.get('id');
const userId = window.location.search;
const baseUrl = "https://jsonplaceholder.typicode.com"
const getUser = baseUrl + "/users" + userId

fetch(getUser)
    .then(value => value.json())
    .then((user) => {
        if (user.length === 1) {
            for (const userWithIndex0 of user) {
                console.log(userWithIndex0);
                const h1 = document.createElement("h1");
                h1.innerText = `Information about ${userWithIndex0.name}`
                document.body.appendChild(h1);
                const divInfo = document.createElement("div");
                divInfo.classList.add("divInfo")
                h1.after(divInfo);
                const userName = document.createElement("h2");
                userName.innerText = `Username: ${userWithIndex0.username}`;
                divInfo.appendChild(userName);
                const email = document.createElement("h2");
                email.innerText = `Email: ${userWithIndex0.email.toLowerCase()}`;
                userName.after(email);
                const id = document.createElement("h2");
                id.innerText = `Id: ${userWithIndex0.id}`;
                email.after(id);
                const phone = document.createElement("h2");
                phone.innerText = `Phone: ${userWithIndex0.phone}`;
                id.after(phone);
                const website = document.createElement("h2");
                website.innerText = `Website: ${userWithIndex0.website}`;
                phone.after(website);
                const address = document.createElement("h2");
                address.innerText = `Address:`;
                website.after(address);
                const ul = document.createElement("ul");
                address.after(ul);
                for (const addressElements in userWithIndex0.address) {
                    if (addressElements !== "geo") {
                        const li = document.createElement("li");
                        li.innerText = `${addressElements}: ${userWithIndex0.address[addressElements]}`;
                        ul.appendChild(li);
                    }
                }
                const liGeo = document.createElement("li");
                ul.appendChild(liGeo);
                const h4 = document.createElement("h4");
                h4.innerText = "geo:"
                liGeo.append(h4)
                for (const addressElements in userWithIndex0.address.geo) {
                    const p = document.createElement("p");
                    p.innerText = `${addressElements}: ${userWithIndex0.address.geo[addressElements]}`;
                    liGeo.appendChild(p);
                }
                const company = document.createElement("h2");
                company.innerText = `Company:`;
                ul.after(company);
                const ul2 = document.createElement("ul");
                company.after(ul2);
                for (const companyElements in userWithIndex0.company) {
                    const li = document.createElement("li");
                    li.innerText = `${companyElements}: ${userWithIndex0.company[companyElements]}`;
                    ul2.appendChild(li);
                }
            }
        }
    })

