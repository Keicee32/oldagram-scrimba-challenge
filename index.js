'use strict'

let mainContainer = document.querySelector('main .container')
let lastClick = 0
 
mainContainer.addEventListener('click', e => {
    
    if(e.target.classList.contains('like') && e.target.style.color !== 'red') {         
        e.target.style.color = 'red'
        e.target.parentElement.nextElementSibling.children[0].children[0].innerText++
        // e.target.parentElement.nextElementSibling.lastElementChild.children[0].innerText++
    } else {
        e.target.style.color = ''
        e.target.parentElement.nextElementSibling.children[0].children[0].innerText--
        // e.target.parentElement.nextElementSibling.lastElementChild.children[0].innerText--
    }    

    if(e.target.className === 'post-comment' && e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.contains('hide')) {
            e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('hide')
            e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[0].focus()
    } else {
        e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('hide')
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
        e.target.parentElement.previousElementSibling.innerHTML += `<br> ${p} ${span}`
        e.target.value = ''
        e.target.parentElement.classList.add('hide')
    } else if(e.target.value === '' && e.keyCode === 13) {
        e.target.parentElement.classList.add('hide')    
    }

})
