const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const meat = document.getElementById("meat");
const score = document.getElementById("score");
const life = document.getElementById("life");
let is_jump = false
let food = 1
window.hit = true

let left = 0;
let randomSeed = Math.floor(Math.random() * 20000);
let randomSeed2 = Math.floor(Math.random() * 4000);



function moveRight() {
        left += 20;
        dino.style.left = left + "px";
}


function moveLeft(){
        left -= 20;
        dino.style.left = left + "px";
}


function jump() {
    is_jump = true
    index = 0
    window.hungry = true
    dino.classList.add("jump-animation");
    setTimeout(() => {
        dino.classList.remove("jump-animation");
        is_jump = false
    }, 900);
}


document.addEventListener('keydown', (event) => {
    // console.log(event)
    if (event.code === 'ArrowRight'){
        moveRight();
    }
    if (event.code === 'ArrowLeft'){
        moveLeft();
    }
    if ((event.code === 'Space') && (!dino.classList.contains('jump-animation'))) {
        jump();

    }

})


setInterval(() => {
    life.innerText = food
    const rockLeft = parseInt(window.getComputedStyle(rock)
        .getPropertyValue('left'));
    const meatLeft = parseInt(window.getComputedStyle(meat)
        .getPropertyValue('left'));
    score.innerText++;


    if (rockLeft < 0) {
        rock.style.display = 'none';
        setTimeout(()=> {rock.style.display = '';
            randomSeed2 = Math.floor(Math.random() * 4000);}, randomSeed2)
        window.hit=true

    }

    let dinoRect = document.getElementById('dino').getBoundingClientRect();
    let meatRect = document.getElementById('meat').getBoundingClientRect();
    let rockRectangle = document.getElementById('rock').getBoundingClientRect();

    function touching(d1, d2) {
        if (d1.x < d2.x + d2.width-100 &&
            d1.x + d1.width-100 > d2.x &&
            d1.y < d2.y + d2.height-100 &&
            d1.y + d1.height-100 > d2.y){
            return true} else {
            return false
        }
        }

    let t = touching(dinoRect, rockRectangle)
    if (t && window.hit) {
        window.hit = false
        food -= 3;
        life.innerText = food
        if (food <= 0) {
            const userscore = score.innerText;
            let params = new URLSearchParams(document.location.search);
            const username = params.get('username');
            const request =new XMLHttpRequest();
            request.open('POST', "/scores/"+JSON.stringify(userscore)+"/"+JSON.stringify(username));
            request.send();
            let now = Date.now(),
                end = now + 1000;
            while (now < end) { now = Date.now();}
            window.location.href = "/scores/"+username;
            // alert("You got a score of: " + score.innerText + "\n\nPlay again?");
            // location.reload();
        }
    }

    if (meatLeft < 0) {
       meat.style.display = 'none'
    setTimeout(()=> {meat.style.display = 'flex';
        randomSeed = Math.floor(Math.random() * 20000);}, randomSeed)
    }

    t = touching(dinoRect, meatRect)
    if (t && window.hungry) {
        window.hungry = false
        meat.style.display = 'none';
        food += 1;
        life.innerText = food
    setTimeout(()=> {meat.style.display = 'flex';
        randomSeed = Math.floor(Math.random() * 20000);}, randomSeed)
    }
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
    }, 500);

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

const jumpSprites = [
     "/static/images/freedinosprite/png/Jump (1).png",
     "/static/images/freedinosprite/png/Jump (2).png",
     "/static/images/freedinosprite/png/Jump (3).png",
     "/static/images/freedinosprite/png/Jump (4).png",
     "/static/images/freedinosprite/png/Jump (5).png",
     "/static/images/freedinosprite/png/Jump (6).png",
     "/static/images/freedinosprite/png/Jump (7).png",
     "/static/images/freedinosprite/png/Jump (8).png",
     "/static/images/freedinosprite/png/Jump (9).png",
     "/static/images/freedinosprite/png/Jump (10).png",
     "/static/images/freedinosprite/png/Jump (11).png",
     "/static/images/freedinosprite/png/Jump (12).png"
]


let index = 0

const updateImage = function() {

    if (is_jump){
        if (index >= jumpSprites.length){
            index = 0;}
        dino.style.backgroundImage = 'url("' + jumpSprites[index] + '")';
        index ++
    }
    else {
        if (index >= sprites.length){
            index = 0}
        dino.style.backgroundImage = 'url("' + sprites[index] + '")';
        index++
    }
}
updateImage()
let interval = setInterval(updateImage, 80);