const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const meat = document.getElementById("meat");
const score = document.getElementById("score");
const life = document.getElementById("life");
let elet = 0

function jump() {
  dino.classList.add("jump-animation");
  setTimeout(() =>
    dino.classList.remove("jump-animation"), 500);
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
