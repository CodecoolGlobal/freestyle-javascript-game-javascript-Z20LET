const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const meat = document.getElementById("meat");
const score = document.getElementById("score");
const life = document.getElementById("life");
let food = 1
let left = 0;
let bottom = 0;
let gravity = 0.98;
let isJump = false;
window.hit = true
let leftTimer
let rightTimer
let goLeft = false
let goRight = false


document.addEventListener('DOMContentLoaded', () => {

        function jump() {
            if (isJump) return
            let upTimer = setInterval(function () {
                //jump down
                if (bottom > 100) {
                    clearInterval(upTimer)
                    let downTimer = setInterval(function () {
                        if (bottom < 0) {
                            clearInterval(downTimer)
                            isJump = false
                        }
                        bottom -= 30
                        bottom = bottom * gravity
                        console.log('down', bottom)
                        dino.style.bottom = bottom + 'px'
                    }, 20)
                }
                //jump up
                isJump = true
                bottom += 30
                bottom = bottom * gravity
                console.log('up', bottom)
                dino.style.bottom = bottom + 'px'
            }, 20)
        }


        function moveLeft() {
            if (goRight) {
                clearInterval(rightTimer)
                goRight = false
            }
            goLeft = true
            leftTimer = setInterval(function () {
                left -= 5
                console.log('left')
                dino.style.left = left + 'px'
            }, 20)
        }


        function moveRight() {
            if (goLeft) {
                clearInterval(leftTimer)
                goLeft = false
            }
            goRight = true
            rightTimer = setInterval(function () {
                left += 5
                console.log('right')
                dino.style.left = left + 'px'
            }, 20)
        }


        function control(e) {
            if (e.keyCode === 32) {
                jump();
            } else if (e.keyCode === 39) {
                moveRight()
                // if ((parseInt(window.getComputedStyle(dino).getPropertyValue('left'))) > 600){
                //     dino.style.right = 600 + 'px'
                // }
            } else if (e.keyCode === 37) {
                moveLeft()
                // if ((parseInt(window.getComputedStyle(dino).getPropertyValue('left'))) < 0){
                //     dino.style.left = 0 + 'px'
                // }
            }
        }

        document.addEventListener('keydown', control)

    }
)


// function jump() {
//     bottom += 30;
//     dino.style.bottom = bottom + 'px';
//
// }

// function control(e){
//     if (e.keyCode === 38){
//         jump();
//     }
// }


//     window.hungry = true
//     dino.classList.add("jump-animation");
//     setTimeout(() =>
//         dino.classList.remove("jump-animation"), 400);
// }


// document.addEventListener('keydown', (event) => {
// //     // if ((event.code === 'Space') && (!dino.classList.contains('jump-animation'))) {
//     if (event.keyCode === 32) {
//         jump();
//     } else if (event.keyCode === 39) {
//         moveRight();
//     } else if (event.keyCode === 37) {
//         moveLeft();
//     }
// })


setInterval(() => {
    life.innerText = food
    const rockLeft = parseInt(window.getComputedStyle(rock)
        .getPropertyValue('left'));
    const meatLeft = parseInt(window.getComputedStyle(meat)
        .getPropertyValue('left'));
    score.innerText++;

    if (rockLeft < 0) {
        rock.style.display = 'none';
        window.hit = true

    } else {
        rock.style.display = ''
    }
    if (meatLeft < 0) {
        meat.style.display = 'none';
    } else {
        meat.style.display = ''

    }

    let d1 = document.getElementById('dino').getBoundingClientRect();
    let d2 = document.getElementById('meat').getBoundingClientRect();
    let d3 = document.getElementById('rock').getBoundingClientRect();

    function touching(d1, d2) {
        let ox = Math.abs(d1.x - d2.x) < (d1.x < d2.x ? d2.width : d1.width);
        let oy = Math.abs(d1.y - d2.y) < (d1.y < d2.y ? d2.height : d1.height);
        return ox && oy;
    }

    let t = touching(d1, d3)
    if (t && window.hit) {
        window.hit = false
        food -= 2;
        life.innerText = food
        if (food <= 0) {
            alert("You got a score of: " + score.innerText +
                "\n\nPlay again?");
            location.reload();
        }
    }

    t = touching(d1, d2) // should return whether they are touching
    if (t && window.hungry) {
        window.hungry = false
        food += 1;
        life.innerText = food
    }


    // console.log(t)
}, 50);