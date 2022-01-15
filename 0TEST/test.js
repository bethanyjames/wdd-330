const btn = document.getElementByID('button');

const rainbow = ['red','orange','yellow','green','blue','purple','violet'];

function change() {
document.body.style.background = rainbow[Math.floor(7*Math.random())];
}

btn.addEventListener('click', change);

