'use strict'

let mainContainer = document.querySelector('main .container')
let lastClick = 0

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

        <img src=${element.post} class="post-img"/>

        <div class="reactions">
            <!-- <img src="images/icon-heart.png" class="like"/> -->
            <i class="fa-solid fa-heart like"></i>
            <img src="images/icon-comment.png" />
            <img src="images/icon-dm.png" />
        </div>

        <div class="likes">
            <p>
                <span class="liked">${element.likes}</span> likes
            </p>
        </div>

        <div class="comment">
            <p>${element.username}</p>
            <span>${element.comment}</span>
        </div>

        `
})

mainContainer.innerHTML = htmlContents

mainContainer.addEventListener('click', e => {
    e.preventDefault()
    // console.log(e.target.className)
    
    if(e.target.classList.contains('like')) {
        
        if(e.target.style.color !== 'red') {  
            e.target.style.color = 'red'
            e.target.parentElement.nextElementSibling.lastElementChild.children[0].innerText++
        } else {
            e.target.style.color = ''
            e.target.parentElement.nextElementSibling.lastElementChild.children[0].innerText--
        }    
    } 
    
})

mainContainer.addEventListener('touchstart', (e) => {
    e.preventDefault()

    if(e.target.className === 'post-img') {
        
        // e.target.addEventListener('touchstart', () => {
        // e.preventDefault()
        
        let date = new Date();
        let time = date.getTime();
        const time_between_taps = 200; // 200ms
        const timeDiff = time - lastClick

        // console.log(time, time_between_taps, timeDiff)

        if ( timeDiff < time_between_taps) {
            console.log('True')
            console.log(e.target.nextElementSibling.nextElementSibling.children[0].children[0].innerText)
            if(e.target.nextElementSibling.children[0].style.color !== 'red') {

                e.target.nextElementSibling.nextElementSibling.children[0].children[0].innerText++
                e.target.nextElementSibling.children[0].style.color = 'red'
            
            } else {
                e.target.nextElementSibling.nextElementSibling.children[0].children[0].innerText = e.target.nextElementSibling.nextElementSibling.children[0].children[0].innerText++
                // document.querySelector('.like').style.color = ''
            }
            
        }

        lastClick = time;
        
    }
    
})
