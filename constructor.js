'use strict'

import {posts} from './data.js'

function PostsRender(data) {
    Object.assign(this, data)

    this.renderPosts = function() {

    const {name, username, location, avatar, post, comment, likes} = this

    return ` 
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
    }
}

const showPosts = new PostsRender(posts[0])
const showPosts2 = new PostsRender(posts[1])
const showPosts3 = new PostsRender(posts[2])

function render() {
    document.querySelector('main .container').innerHTML += `${showPosts.renderPosts()}  ${showPosts2.renderPosts()} ${showPosts3.renderPosts()}`
    
}

render()