const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const meat = document.getElementById("meat");
const score = document.getElementById("score");
const life = document.getElementById("life");
let food = 1
window.hit = true
let left = 0;
let randomSeed = Math.floor(Math.random() * 6000);
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
    window.hungry = true
    dino.classList.add("jump-animation");
    setTimeout(() => dino.classList.remove("jump-animation"), 600);
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

    // } else {
    //     rock.style.display = ''
    }
    if (meatLeft < 0) {
        meat.style.display = 'none';
        setTimeout(()=> {meat.style.display = '';
            randomSeed = Math.floor(Math.random() * 6000);}, randomSeed)
    }

    let dinoRect = document.getElementById('dino').getBoundingClientRect();
    let meatRect = document.getElementById('meat').getBoundingClientRect();
    let rockRectangle = document.getElementById('rock').getBoundingClientRect();

    function touching(d1, d2) {
        if (((d1.right>d2.left) && (d1.left<d2.right)) && ((d1.top>d2.bottom) && (d1.bottom<d2.top)))
            {return true;}
        else {return false}
    }

    let t = touching(dinoRect, rockRectangle)
    // if (t === true) {console.log(window.hit)}
    if (t && window.hit) {
        window.hit = false
        food -= 2;
        life.innerText = food
        if (food <= 0) {
            alert("You got a score of: " + score.innerText + "\n\nPlay again?");
            location.reload();
        }
    }

    t = touching(dinoRect, meatRect) // should return whether they are touching
    console.log(t)
    // console.log(dinoRect.x, dinoRect.y, meatRect.x, meatRect.y);
    if (t && window.hungry) {
        window.hungry = false
        food += 1;
        life.innerText = food
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