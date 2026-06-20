const email = document.getElementById('mail');
const password = document.getElementById('password');
const passwordr = document.getElementById('passwordr');
const Error = document.getElementsByClassName('error');

const MR = /^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PR = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;


function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

    document.cookie =
        name + "=" + encodeURIComponent(value) +
        "; expires=" + date.toUTCString() +
        "; path=/";
}

function getCookie(name) {
    const cookies = document.cookie.split("; ")

    for(let i = 0; i< cookies.length; i++){
        let parts = cookies[i].split("=")
        let cookieName = parts[0]
        let cookieValue = parts[1]

        if (cookieName === name){
            return decodeURIComponent(cookieValue)
        }
    }
}

function deleteCookie(name) {
    document.cookie = `${name}=; max-age=0; path=/`;
}

document.getElementById('Submit').addEventListener('click', () => {
    let validform = true;
    let emailVal = email.value;
    let passVal = password.value;
    let passrVal = passwordr.value;

    if (!MR.test(emailVal)){
        console.log('email');
        Error[0].textContent = 'Error email position missmatch';
        validform = false;
    }
    else{
        Error[0].textContent = '';
    }
    if (!PR.test(passVal)){
        console.log('pass');
        Error[1].textContent = 'Error password position missmatch';
        validform = false;
    }
    else{
        Error[1].textContent = '';
    }
    if (passrVal !== passVal){
        console.log('pass rep');
        Error[2].textContent = 'Error Password mismatch';
        validform = false;
    }
    else{
        Error[2].textContent = '';
    }
    if (validform){
        setCookie('email', emailVal, 30);
        console.log('REDIRECT');
        location.href = './profile.html';
    }
});