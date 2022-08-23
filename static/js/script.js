const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const meat = document.getElementById("meat");
const score = document.getElementById("score");
const life = document.getElementById("life");
let elet = 0

function jump() {
    dino.classList.add("jump-animation");
    setTimeout(() =>
        dino.classList.remove("jump-animation"), 700);
}

document.addEventListener('keypress', (event) => {
    if (!dino.classList.contains('jump-animation')) {
        jump();
    }
})

setInterval(() => {
    const dinoTop = parseInt(window.getComputedStyle(dino)
        .getPropertyValue('top'));
    const rockLeft = parseInt(window.getComputedStyle(rock)
        .getPropertyValue('left'));
    const meatLeft = parseInt(window.getComputedStyle(meat)
        .getPropertyValue('left'));
    score.innerText++;

    if (rockLeft < 0) {
        rock.style.display = 'none';

    } else {
        rock.style.display = ''
    }
    if (meatLeft < 0) {
        meat.style.display = 'none';
        if (dinoTop > 0) {
            elet += 1;
            life.innerText = elet
        }
    } else {
        meat.style.display = ''

    }

    if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
        alert("You got a score of: " + score.innerText +
            "\n\nPlay again?");
        location.reload();
    }

}, 16);


// let dinosaurus = document.getElementById('dino').getBoundingClientRect();
// let dinosaurusTop = dinosaurus.top;
// let dinosaurusLeft = dinosaurus.left;
// let dinosaurusRight = dinosaurus.right
// let dinosaurusBottom = dinosaurus.bottom
//
// let div2 = document.getElementById('meat').getBoundingClientRect();
// let div2Top = div2.top;
// let div2Left = div2.left;
// let div2Right = div2.right;
// let div2Bottom = div2.bottom;
// let horizontalMatch = true;
// let verticalMatch = true;
// let intersect = true;
//
// if ((div2Top > dinosaurusTop && div2Top < dinosaurusBottom)||(div2Bottom > dinosaurusTop && div2Bottom < dinosaurusBottom)) {
//   verticalMatch = true
// } else{
//   verticalMatch = false
// }
//
// if ((div2Right > dinosaurusLeft && div2Right < dinosaurusRight)||(div2Left < dinosaurusRight && div2Left > dinosaurusLeft)) {
//   horizontalMatch = true
// } else {
//   horizontalMatch = false
// }
//
// if (horizontalMatch && verticalMatch){
//   intersect = true
// } else {
//   intersect = false
// }

let d1 = document.getElementById('dino').getBoundingClientRect();
let d2 = document.getElementById('meat').getBoundingClientRect();

function touching(d1, d2) {
    let ox = Math.abs(d1.x - d2.x) < (d1.x < d2.x ? d2.width : d1.width);
    let oy = Math.abs(d1.y - d2.y) < (d1.y < d2.y ? d2.height : d1.height);
    return ox && oy;
}

let t = touching(d1, d2) // should return whether they are touching
console.log(t)