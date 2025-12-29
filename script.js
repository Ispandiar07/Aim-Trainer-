let score = 0;
const target = document.getElementById("target");

function randomPos() {
const x = Math.random() * 260;
const y = Math.random() * 260;
target.style.left = x + "px";
target.style.top = y + "px";
}

function hit(e) {
e.stopPropagation();
score++;
document.getElementById("score").textContent = score;
randomPos();
}

function miss() {
if(score > 0) score--;
document.getElementById("score").textContent = score;
}

function start() {
score = 0;
document.getElementById("score").textContent = score;
randomPos();
}
