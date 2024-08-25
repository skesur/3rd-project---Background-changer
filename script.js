// let body = document.querySelector('body');
// let button = document.querySelector('button');

function color() {
    let color1 = Math.round(Math.random()*100);
    let color2 = Math.round(Math.random()*100);
    let color3 = Math.round(Math.random()*100);
    let back = `rgb(${color1},${color2},${color3})`
    document.querySelector(".body").style.backgroundColor = back;
}