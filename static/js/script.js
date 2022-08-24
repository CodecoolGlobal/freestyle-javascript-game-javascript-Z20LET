const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const meat = document.getElementById("meat");
const score = document.getElementById("score");
const life = document.getElementById("life");
let food = 1
window.hit = true
let left = 0;

function moveRightLeft(e) {
    if (e.keyCode === 39) {
        left += 20;
        dino.style.left = left + "px";
    }
    if (e.keyCode === 37) {
        left -= 20;
        dino.style.left = left + "px";
    }
}
document.onkeydown = moveRightLeft;


function jump() {
    window.hungry = true
    dino.classList.add("jump-animation");
    setTimeout(() => dino.classList.remove("jump-animation"), 400);
}

function run_right() {
    window.hungry = true
    dino.classList.add("move-right-animation");
    setTimeout(() =>
        dino.classList.remove("jump-animation"), 700);
}

document.addEventListener('keypress', (event) => {
    console.log(event)
    if ((event.code === 'Space') && (!dino.classList.contains('jump-animation'))) {
        jump();
    }
    if ((event.code === 'KeyD') && (!dino.classList.contains('move-right-animation'))) {
        run_right();}
})


setInterval(() => {
    life.innerText = food
    const dinoTop = parseInt(window.getComputedStyle(dino)
        .getPropertyValue('top'));
    const rockLeft = parseInt(window.getComputedStyle(rock)
        .getPropertyValue('left'));
    const meatLeft = parseInt(window.getComputedStyle(meat)
        .getPropertyValue('left'));
    score.innerText++;

    if (rockLeft < 0) {
        rock.style.display = 'none';
        window.hit=true

    } else {
        rock.style.display = ''
    }
    if (meatLeft < 0) {
        meat.style.display = 'none';
    } else {
        meat.style.display = ''

    }

    // if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
    //     food -= 1;
    //     life.innerText = food
    //     if (food==0){
    //         alert("You got a score of: " + score.innerText +
    //         "\n\nPlay again?");
    //     location.reload();}
    //
    // }
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
            alert("You got a score of: " + score.innerText + "\n\nPlay again?");
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


setInterval(() => {
    const targetAspectRatio = 16 / 9;
    const root = document.querySelector("#root");
    const container = document.querySelector("#container");
    const rootBoundingRect = root.getBoundingClientRect();

    const rootDivAspect = rootBoundingRect.width / rootBoundingRect.height;
    if (rootDivAspect > targetAspectRatio) {
        container.style.height = "100%";
        const newWidth = rootBoundingRect.width * (targetAspectRatio / rootDivAspect)
        container.style.width = newWidth + "px";
    } else {
        container.style.width = "100%";
        const newHeight = rootBoundingRect.height * (rootDivAspect / targetAspectRatio);
        container.style.height = newHeight + "px";
    }

  }, 1000);

 const sprites = [
     "/static/images/freedinosprite/png/Run (1).png",
     "/static/images/freedinosprite/png/Run (2).png",
     "/static/images/freedinosprite/png/Run (3).png",
     "/static/images/freedinosprite/png/Run (4).png",
     "/static/images/freedinosprite/png/Run (5).png",
     "/static/images/freedinosprite/png/Run (6).png",
     "/static/images/freedinosprite/png/Run (7).png",
     "/static/images/freedinosprite/png/Run (8).png"
 ];

let index = 0

const updateImage = function() {
    if (index >= sprites.length){
        index = 0;
    }
    // console.log(sprites[index])
    dino.style.backgroundImage = 'url("' + sprites[index] + '")';
    index ++
    // console.log(dino.style)
}

updateImage()

let interval = setInterval(updateImage, 100);