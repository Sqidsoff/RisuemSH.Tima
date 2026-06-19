const paintspace = document.getElementById('paintspace');
const sizeInput = document.getElementById('size');
const color = document.getElementById('color');
const createb = document.getElementById('create');
const randomb = document.getElementById('random');
const clearb = document.getElementById('clear');

let mouseDwn = false;
let mouseB = 0;

createb.addEventListener('click', create);
randomb.addEventListener('click', random);
clearb.addEventListener('click', clear);
document.addEventListener('mousedown', (e) => {mouseDwn = true;mouseB = e.button;});
document.addEventListener('mouseup', () => {mouseDwn = false;});
paintspace.addEventListener('contextmenu', (e) => {e.preventDefault();});

function create() {
    let size = Number(sizeInput.value);

    paintspace.innerHTML = '';

    for (let i = 0; i < size; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < size; j++) {
            let td = document.createElement('td');

            td.addEventListener('mousedown', draw);
            td.addEventListener('mouseover', drawMove);

            tr.append(td);
        }

        paintspace.append(tr);
    }
}

function draw(e) {
    if (e.button === 0) {
        e.target.style.backgroundColor = color.value;
    }

    if (e.button === 2) {
        e.target.style.backgroundColor = '';
    }
}

function drawMove(e) {
    if (!mouseDwn) return;

    if (mouseB === 0) {
        e.target.style.backgroundColor = color.value;
    }

    if (mouseB === 2) {
        e.target.style.backgroundColor = '';
    }
}

function random() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    color.value =
        '#' +
        r.toString(16).padStart(2, '0') +
        g.toString(16).padStart(2, '0') +
        b.toString(16).padStart(2, '0');
}

function clear() {
    let cells = paintspace.querySelectorAll('td');

    cells.forEach(cell => {
        cell.style.backgroundColor = '';
    });
}