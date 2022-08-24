const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const score = document.getElementById("score");

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
  score.innerText++;

  if (rockLeft < 0) {
    rock.style.display = 'none';
  } else {
    rock.style.display = ''
  }

  if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
    alert("You got a score of: " + score.innerText +
      "\n\nPlay again?");
    location.reload();
  }
}, 50);

 setInterval(() => {
      const targetAspectRatio = 16/9;
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

