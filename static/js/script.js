const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const meat = document.getElementById("meat");
const score = document.getElementById("score");
const life = document.getElementById("life");
let food = 1
window.hit=true
let left = 0;



function moveRightLeft(e){
    if (e.keyCode === 39){
        left += 3;
        dino.style.left = left + "px";
    }
    if (e.keyCode === 37){
        left -= 3;
        dino.style.left = left + "px";
    }
}


document.onkeydown = moveRightLeft;



function jump() {
    window.hungry = true
    dino.classList.add("jump-animation");
    setTimeout(() =>
        dino.classList.remove("jump-animation"), 400);
}

document.addEventListener('keypress', (event) => {
    if ((event.keyCode === 32) && (!dino.classList.contains('jump-animation'))) {
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
        window.hit=true

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
        if (food<=0){
            alert("You got a score of: " + score.innerText +
            "\n\nPlay again?");
            location.reload();}
    }

    t = touching(d1, d2) // should return whether they are touching
    if (t && window.hungry) {
        window.hungry = false
        food += 1;
        life.innerText = food
        }


       // console.log(t)
}, 50);