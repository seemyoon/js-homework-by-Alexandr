const urlLocalParams = new URLSearchParams(window.location.search);
const postId = urlLocalParams.get('id');
console.log(postId)
const baseUrl = "https://jsonplaceholder.typicode.com";
const getPostUser = `${baseUrl}/posts/${postId}`;
const getPostMessages = `${getPostUser}/comments`
console.log(getPostMessages)
fetch(getPostUser)
    .then(res => res.json())
    .then((postFullInfo) => {
        const divPostFullInfo = document.createElement("div");
        divPostFullInfo.classList.add("post-full-info");
        document.body.appendChild(divPostFullInfo);
        const h3UserId = document.createElement("h3");
        divPostFullInfo.appendChild(h3UserId);
        h3UserId.innerHTML = `User ID: ${postFullInfo.userId}`
        const h3Id = document.createElement("h3");
        h3UserId.after(h3Id)
        h3Id.innerHTML = `Post ID: ${postFullInfo.id}`
        const h3Title = document.createElement("h3");
        h3Id.after(h3Title)
        h3Title.innerHTML = `Title: ${postFullInfo.title}`
        const h3Body = document.createElement("h3");
        h3Title.after(h3Body)
        h3Body.innerHTML = `Body: ${postFullInfo.body}`
        const btnComments = document.createElement("button");
        divPostFullInfo.after(btnComments)
        btnComments.innerText = "see comments"
        btnComments.classList.add("btnComments")
        const divPostsComments = document.createElement("div");
        divPostsComments.classList.add("user-posts");
        btnComments.addEventListener("click", function () {
            if (!document.body.contains(divPostsComments)) {
                btnComments.after(divPostsComments);
                fetch(getPostMessages)
                    .then(res => res.json())
                    .then((comments) => {
                        console.log(comments)
                        for (const comment of comments) {
                            const divComments = document.createElement("div");
                            divComments.classList.add("comment");
                            divPostsComments.appendChild(divComments)
                            const commentPostId = document.createElement("h3");
                            commentPostId.innerHTML = `Post ID: ${comment.postId}`
                            divComments.appendChild(commentPostId)
                            const commentId = document.createElement("h3");
                            commentId.innerHTML = `Comment ID: ${comment.id}`
                            commentPostId.after(commentId)
                            const commentNameUser = document.createElement("h3");
                            commentNameUser.innerHTML = `Name User: ${comment.name}`
                            commentId.after(commentNameUser)
                            const commentEmailUser = document.createElement("h3");
                            commentEmailUser.innerHTML = `Email User: ${comment.email}`
                            commentNameUser.after(commentEmailUser)
                            const commentBodyUser = document.createElement("h3");
                            commentNameUser.innerHTML = `Body User: ${comment.body}`
                            commentEmailUser.after(commentNameUser)
                        }
                    })
            }
        })
    })