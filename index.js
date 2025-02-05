// 1. JS Module API
import {addPlusOnePointToHome} from "./functions.js";
import {addPlusTwoPointToHome} from "./functions.js";
import {addPlusThreePointToHome} from "./functions.js";
import {addPlusOnePointToGuest} from "./functions.js";
import {addPlusTwoPointToGuest} from "./functions.js";
import {addPlusThreePointToGuest} from "./functions.js";
import {newGame} from "./functions.js";

// 2. variables - used to store data values for later use (Global Scope)
const plusOnePointHomeBtn = document.getElementById("plus-one-point-home");
const plusTwoPointHomeBtn = document.getElementById("plus-two-point-home");
const plusThreePointHomeBtn = document.getElementById("plus-three-point-home");
const plusOnePointGuestBtn = document.getElementById("plus-one-point-guest");
const plusTwoPointGuestBtn = document.getElementById("plus-two-point-guest");
const plusThreePointGuestBtn = document.getElementById("plus-three-point-guest");
const newGameBtn = document.getElementById("newgame-btn");


// 3. Event Listener - is a procedure or method executed when any event occurs like a "click event"
plusOnePointHomeBtn.addEventListener("click", function() {
    // invoke function
    addPlusOnePointToHome();
})

plusTwoPointHomeBtn.addEventListener("click", function() {
    // invoke function
    addPlusTwoPointToHome();
})

plusThreePointHomeBtn.addEventListener("click", function() {
    // invoke function
    addPlusThreePointToHome();
})

plusOnePointGuestBtn.addEventListener("click", function() {
    // invoke function
    addPlusOnePointToGuest();
})

plusTwoPointGuestBtn.addEventListener("click", function() {
    // invoke function
    addPlusTwoPointToGuest();
})

plusThreePointGuestBtn.addEventListener("click", function() {
    // invoke function
    addPlusThreePointToGuest();
})

newGameBtn.addEventListener("click", function() {
    // invoke function
    newGame();
})