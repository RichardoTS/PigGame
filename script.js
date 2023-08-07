"use strict";

// Selecting elements
const score0Elemt = document.querySelector("#score--0");
const score1Elemt = document.querySelector("#score--1");
const diceElement = document.querySelector(".dice");

// Starting conditions
score0Elemt.textContent = 0;
score1Elemt.textContent = 0;
diceElement.classList.add("hidden");
