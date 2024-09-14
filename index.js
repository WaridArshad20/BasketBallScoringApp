let homescoreEl = document.getElementById("home-score");
let guestscoreEl = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

function addHomeOne() {
  homeScore += 1;
  homescoreEl.innerHTML = homeScore;
}

function addHomeTwo() {
  homeScore += 2;
  homescoreEl.innerHTML = homeScore;
}

function addHomeThree() {
  homeScore += 3;
  homescoreEl.innerHTML = homeScore;
}

function addGuestOne() {
  guestScore += 1;
  guestscoreEl.innerHTML = guestScore;
}

function addGuestTwo() {
  guestScore += 2;
  guestscoreEl.innerHTML = guestScore;
}

function addGuestThree() {
  guestScore += 3;
  guestscoreEl.innerHTML = guestScore;
}

function startGame() {
  homeScore = 0;
  guestScore = 0;
  homescoreEl.innerHTML = homeScore;
  guestscoreEl.innerHTML = guestScore;
}
