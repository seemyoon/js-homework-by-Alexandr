const urlLocalParams = new URLSearchParams(window.location.search);
const userId = urlLocalParams.get('id');
const baseUrl = "https://jsonplaceholder.typicode.com";
// User url
const getInfoUser = baseUrl + "/users?id=" + userId;
// User's post url
const getPostUser = `${baseUrl}/users/${userId}/posts`;
fetch(getInfoUser)
    .then(res => res.json())
    .then((info) => {
        const divUser = document.createElement("div");
        divUser.classList.add("info-user");
        document.body.appendChild(divUser);
        const btnInfo = document.createElement("button");
        divUser.after(btnInfo)
        btnInfo.innerText = "post of current user"
        btnInfo.classList.add("btnMainPostInfo")
        const divUserPosts = document.createElement("div");
        divUserPosts.classList.add("user-posts");
        btnInfo.addEventListener("click", function () {
            if (!document.body.contains(divUserPosts)) {
                btnInfo.after(divUserPosts);
                fetch(getPostUser)
                    .then(res => res.json())
                    .then((post) => {
                        console.log(post)
                        for (const field of post) {
                            const divPostTitle = document.createElement("div");
                            divPostTitle.classList.add("post-title");
                            divUserPosts.appendChild(divPostTitle)
                            const h4PostTitle = document.createElement("h4");
                            h4PostTitle.innerHTML = field.title;
                            divPostTitle.appendChild(h4PostTitle)
                            const btnTitle = document.createElement("button");
                            h4PostTitle.after(btnTitle)
                            btnTitle.innerText = "more details about this post "
                            btnTitle.addEventListener("click", function () {
                                window.location.href = `user-posts/post-details.html?id=${field.id}`;
                            })
                        }
                    })
            }
        })
        info.forEach((value) => {
                const fieldId = document.createElement("h2");
                divUser.appendChild(fieldId)
                fieldId.innerHTML = `User ID: ${value.id}`
                const fieldName = document.createElement("h2");
                fieldId.after(fieldName)
                fieldName.innerHTML = `Name: ${value.name}`
                const fieldEmail = document.createElement("h2");
                fieldName.after(fieldEmail)
                fieldEmail.innerHTML = `Email: ${value.email.toLowerCase()}`
                const fieldAddress = document.createElement("h2");
                fieldEmail.after(fieldAddress)
                fieldAddress.innerText = "Address:"
                const ulFieldAddress = document.createElement("ul");
                fieldAddress.after(ulFieldAddress)
                for (const addressInfo in value.address) {
                    if (typeof value.address[addressInfo] !== "object") {
                        const fieldAddressStreet = document.createElement("li");
                        fieldAddressStreet.innerHTML = `${addressInfo}: ${value.address[addressInfo]}`
                        ulFieldAddress.appendChild(fieldAddressStreet)
                    } else {
                        const fieldAddressGeo = document.createElement("li");
                        fieldAddressGeo.innerHTML = "geo: "
                        ulFieldAddress.appendChild(fieldAddressGeo)
                        for (const geo in value.address[addressInfo]) {
                            const p = document.createElement("p");
                            p.innerHTML = `${geo}: ${value.address[addressInfo][geo]}`
                            fieldAddressGeo.appendChild(p)
                        }
                    }
                }
                const fieldPhone = document.createElement("h2")
                fieldPhone.innerText = `Phone: ${value.phone}`
                ulFieldAddress.after(fieldPhone)
                const fieldWebsite = document.createElement("h2")
                fieldWebsite.innerText = `Website: ${value.website.toLowerCase()}`
                fieldPhone.after(fieldWebsite);
                const fieldCompany = document.createElement("h2")
                fieldCompany.innerText = "Company:"
                fieldWebsite.after(fieldCompany)
                const ulFieldCompany = document.createElement("ul");
                fieldCompany.after(ulFieldCompany)
                for (const companyInfo in value.company) {
                    const fieldCompanyName = document.createElement("li");
                    fieldCompanyName.innerHTML = `${companyInfo}: ${value.company[companyInfo]}`
                    ulFieldCompany.appendChild(fieldCompanyName)
                }
            }
        )

    })
