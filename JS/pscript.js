function setCookie(name, value, days) {
    const date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires" + date.toUTCString() + ";path=/"
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

function Cd(str) {
    return str.replace(/\D/g, '').length;
}

const Umail = document.getElementById('Umail');
const Fname = document.getElementById('fname');
const Lname = document.getElementById('lname');
const Yrbth = document.getElementById('yrbth');
const gender = document.getElementById('gender');
const number = document.getElementById('number');
const Skype = document.getElementById('skype');
const NR = /^[A-Za-zА-Яа-яІіЇїЄєҐґ]{1,20}$/;
const PR = /^[0-9\s()-]*$/;
const SR = /^[A-Za-z0-9.-]*$/;
const Error = document.getElementsByClassName('error');
Umail.textContent = getCookie('email');

document.getElementById('Submit').addEventListener('click', () => {
    let valid = true;

    const currentYear = new Date().getFullYear();

    if (!NR.test(Fname.value)) {
        Error[0].textContent = 'First name';
        valid = false;
    } else {
        Error[0].textContent = '';
    }

    if (!NR.test(Lname.value)) {
        Error[1].textContent = 'Last name';
        valid = false;
    } else {
        Error[1].textContent = '';
    }

    if (Yrbth.value === '' || Yrbth.value < 1900 || Yrbth.value > currentYear) {
        Error[2].textContent = 'Year';
        valid = false;
    } else {
        Error[2].textContent = '';
    }

    if (number.value !== ' ') {
        const digits = number.value.replace(/\D/g, '').length;

        if (!PR.test(number.value) || digits < 10 || digits > 12) {
            Error[3].textContent = 'Phone';
            valid = false;
        } else {
            Error[3].textContent = '';
        }
    } else {
        Error[3].textContent = '';
    }

    if (Skype.value !== ' ' || !SR.test(Skype.value)) {
        Error[4].textContent = 'Skype';
        valid = false;
    } else {
        Error[4].textContent = '';
    }

    if (valid) {
        setCookie('fname', Fname.value, 30);
        setCookie('lname', Lname.value, 30);
        setCookie('yrbth', Yrbth.value, 30);
        setCookie('gender', gender.value, 30);
        setCookie('number', number.value, 30);
        setCookie('skype', Skype.value, 30);
    }
});
Umail.textContent = getCookie('email');

document.getElementById('exit').addEventListener('click', () =>{
   deleteCookie('email');
   location.href = './profile.html';
});
