'use strict'

let mainContainer = document.querySelector('main .container')

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let htmlContents = ''

posts.forEach(element => {
    htmlContents += `
        <div class='profile-details'>
            <div class='profile-img'>
                <img src=${element.avatar} alt='Avatar of ${element.name}' class='profile-picture' />
            </div>
            <div class="profile-detail">
                <h2>${element.name}</h2>
                <p>${element.location}</p>
            </div>
        </div>

        <img src=${element.post} />

        <div class="reactions">
            <img src="images/icon-heart.png" />
            <img src="images/icon-comment.png" />
            <img src="images/icon-dm.png" />
        </div>

        <div class="likes">
            <p>${element.likes} likes</p>
        </div>

        <div class="comment">
            <p>${element.username}</p>
            <span>${element.comment}</span>
        </div>
    `
    console.log(element.avatar)
})

mainContainer.innerHTML = htmlContents