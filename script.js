"use strict";


$('#username_dashboard').innerHTML = localStorage.getItem('username')

$('.mainOut').addEventListener('click', () => {
    localStorage.clear()
    loginOut()
})

function loginOut() {
    if (!localStorage.getItem('token')) {
        window.location.replace('./login.html')
    }
}

loginOut()