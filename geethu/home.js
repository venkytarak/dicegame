const startup = document.querySelector(".startup");
const p1name = document.getElementById("name1");
const p2name = document.getElementById("name2");
const section1 = document.querySelector(".section1");
const play1 = document.querySelector(".first");
const play2 = document.querySelector(".last");
const p1cur = document.querySelector(".p1cur");
const p2cur = document.querySelector(".p2cur");
const rolldice = document.querySelector(".roll");
const diceimg = document.querySelector(".image");
const modal = document.querySelector(".modal");

let curscore = 0;
let actplay = 1;
let p1score = 0;
let p2score = 0;

section1.classList.add("section1-hide");

function bgchange(a, b) {
  play1.classList.remove(a);
  play1.classList.add(b);
  play2.classList.remove(b);
  play2.classList.add(a);
}
function shift() {
  if (actplay === 1) {
    bgchange("first", "last");
    p1score += curscore;
    document.querySelector(`.score1`).textContent = p1score;
    curscore = 0;
  } else {
    bgchange("last", "first");
    p2score += curscore;
    document.querySelector(`.score2`).textContent = p2score;
    curscore = 0;
  }
  actplay = actplay === 1 ? 2 : 1;
}
function init() {
  curscore = 0;
  actplay = 1;
  p1score = 0;
  p2score = 0;
  p1cur.textContent = 0;
  p2cur.textContent = 0;
  document.querySelector(`.score1`).textContent = 0;
  document.querySelector(`.score2`).textContent = 0;
}
function newgame() {
  modal.style.display = "none";
  startup.style.display = "flex";
  init();
}
function newgame1() {
  init();
}

function closeModel(e) {
  document.querySelector(".name-1").textContent = p1name.value;
  document.querySelector(".name-2").textContent = p2name.value;
  document.querySelector(".startup").style.display = "none";
  section1.classList.remove("section1-hide");
  section1.classList.add("section1");
}

rolldice.addEventListener("click", function (e) {
  e.preventDefault();
  const dice = Math.trunc(Math.random() * 5 + 1);
  diceimg.src = `dice-${dice}.png`;
  if (dice !== 1) {
    curscore += dice;
    document.querySelector(`.p${actplay}cur`).textContent = curscore;
  } else {
    shift();
  }

  if (p1score >= 100) {
    document.getElementById(
      "winnermsg"
    ).textContent = `${p1name.value} won the game with ${p1score} points`;
    section1.style.display = "none";
    modal.style.display = "flex";
  } else if (p2score >= 100) {
    document.getElementById(
      "winnermsg"
    ).textContent = `${p2name.value} won the game with ${p2score} points`;
    section1.style.display = "none";
    modal.style.display = "flex";
  }
});