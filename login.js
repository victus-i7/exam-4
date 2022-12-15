'use strict'


let urlUser = "https://task.samid.uz/v1/user/sign-in"

$('#signIn').addEventListener('submit', (e) => {
    e.preventDefault();
    let name = $('#signIn_name').value.trim();
    let password = $('#signIn_password').value.trim();
    const users = {
        username: name,
        password: password,
    }
    if (users.username.length === 0 || users.password.length === 0) {
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
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('name', res.data.username)
                window.location.replace('../index.html')

            }
        })
    }

})



