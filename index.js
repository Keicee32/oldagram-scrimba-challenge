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

    const {name, avatar, location, post, likes, username, comment} = element

    htmlContents += `
        <div class='profile-details'>
            <div class='profile-img'>
                <img src=${avatar} alt='Avatar of ${name}' class='profile-picture' />
            </div>
            <div class="profile-detail">
                <h2>${name}</h2>
                <p>${location}</p>
            </div>
        </div>

        <img src=${post} class="post-img"/>

        <div class="reactions">
            <!-- <img src="images/icon-heart.png" class="like"/> -->
            <i class="fa-solid fa-heart like"></i>
            <img src="images/icon-comment.png" class="post-comment"/>
            <img src="images/icon-dm.png" />
        </div>

        <div class="likes">
            <p>
                <span class="liked">${likes}</span> likes
            </p>
        </div>

        <div class="comment">
            <p>${username}</p>
            <span>${comment}</span>
        </div>

        <div class="hide comments">
            <input type="text" name="comment" class="input" placeholder="Enter comment here"/>
        </div>

        `
})

mainContainer.innerHTML = htmlContents

mainContainer.addEventListener('click', e => {
    
    if(e.target.classList.contains('like')) {
        
        if(e.target.style.color !== 'red') {  
            e.target.style.color = 'red'
            e.target.parentElement.nextElementSibling.lastElementChild.children[0].innerText++
        } else {
            e.target.style.color = ''
            e.target.parentElement.nextElementSibling.lastElementChild.children[0].innerText--
        }    
    } 

    if(e.target.className === 'post-comment') {
        if(e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.contains('hide')) {
            e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('hide')
            e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[0].focus()
        } else {
            e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('hide')
        }
    }
    
})

mainContainer.addEventListener('touchstart', (e) => {

    if(e.target.className === 'post-img') {
        
        
        let date = new Date();
        let time = date.getTime();
        const time_between_taps = 200; // 200ms
        const timeDiff = time - lastClick


        if ( timeDiff < time_between_taps) {
            
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

mainContainer.addEventListener('keypress', (e) => {
    let p = ''
    let span = ''
    
    if(e.keyCode === 13 && e.target.value !== '') {
        p = `<p>Mr X </p>`
        span = `<span>${e.target.value.trim()}</span>`
        e.target.parentElement.previousElementSibling.innerHTML += `<br>` + p + span
        e.target.value = ''
        e.target.parentElement.classList.add('hide')
    } else if(e.target.value === '' && e.keyCode === 13) {
        e.target.parentElement.classList.add('hide')    
    }

})

