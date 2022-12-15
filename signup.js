"use strict";
const urlUser = "https://task.samid.uz/v1/user/sign-up"

$('#singUp').addEventListener('submit', (e) => {
    e.preventDefault();
    let name = $('#reg_username').value.trim();
    let email = $('#reg_useremail').value.trim();
    let password = $('#reg_password').value.trim();
    const users = {
        username: name,
        email: email,
        password: password,
    }
    if (users.username.length === 0 || users.email.length === 0 || users.password.length === 0) {
        alert('Plase fill ...')
    } else {
        fetch(`${urlUser}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(users)
        }).then(data => data.json()).then(res => {
            if (res.code == '-1') {
                alert(res.errors.username)
            } else {
                alert(res.message)
                setTimeout(() => {
                    window.location.replace('../login.html')
                }, 1000)
            }
        })
    }

})
