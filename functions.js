// 1. JS Module API
import {resetTimer} from "./timer.js";

// 2. variables - used to store data values for later use (Global Scope)
let home = 0;
let guest = 0;
const homeScoreText = document.getElementById("home-score-text");
const guestScoreText = document.getElementById("guest-score-text");

// 4. functions -  block of code designed to perform a particular task when invoked
export function addPlusOnePointToHome() {
    // reassign the home count variable
    home += 1;
    // html dom
    homeScoreText.textContent = home;
}

export function addPlusTwoPointToHome() {
    // reassign the home count variable
    home += 2;
    // html dom
    homeScoreText.textContent = home;
}

export function addPlusThreePointToHome() {
    // reassign the home count variable
    home += 3;
    // html dom
    homeScoreText.textContent = home;
}

export function addPlusOnePointToGuest() {
    // reassign the home count variable
    guest += 1;
    // html dom
    guestScoreText.textContent = guest;
}

export function addPlusTwoPointToGuest() {
    // reassign the home count variable
    guest += 2;
    // html dom
    guestScoreText.textContent = guest;
}

export function addPlusThreePointToGuest() {
    // reassign the home count variable
    guest += 3;
    // html dom
    guestScoreText.textContent = guest;
}

export function newGame() {
    // reassign the home & guest count
    home = 0;
    guest = 0;
    // html dom
    homeScoreText.textContent = home;
    guestScoreText.textContent = guest;
    // invoke function to reset the timer
    resetTimer();
}