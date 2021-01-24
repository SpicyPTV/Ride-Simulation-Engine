/*
Beta_Build-0.2;
Compile Date: 24/1/21;
Days working on build: 7;
© Pieter Edwards 2021, this is a BETA build not intended for public distribution;
*/

// Variable bank

var gates = false; // false = Closed, true = Open
var restraints = true; // false = Open, true = closed
var status = false; // false = Closed, true = Open
var power = false; // false = Off, true = On
var eStop = false; //false = Off, true = On
var mode = "nill"; // false = Maint, true = Normal, nill = Not Set
var blocks = new Array(false, false, false); // Handles block state
var switches = new Array(false, false); // Handles switch track state
var score = 0; // Keeps tack of score before submiting it
var verString = "Beta_Build-0.2"

// Functions and Code

window.onload=function() { // Function runs when page loads
  document.addEventListener("keydown",keyPush); // Allows key input
  setInterval(main,1000/30); // Sets frame rate
  $("#block-pannel").hide(); // Hides pannel
};

function main() {
  //Controls Game logic
};

function keyPush(evt) { // Handles keypad input
  switch (evt.keyCode) {
    case 82: // 'R'
      restartEstop();
    case 83: // 'S'
      estopController();
      break;
    default: // Activates when key is pressed that doesnt do anything
      console.log("NaN");
  };
};

function powerController() { // Handles Power
  if (power===false) {
    power=true; // Activates Power
    eStop=true; // Activates eStop
    console.log("Power: " + power + "\nE-Stop: " + eStop); // Logs Power and E-Stop state
  } else if (eStop===true) {
    if (power===true) {
      power=false; // Deactivates Power
      eStop=false; // Deactivates eStop
      mode="nill"; // Clears Mode
      console.log("Power: " + power + "\nE-Stop: " + eStop + "\nMode: " + mode); // Logs Power, E-Stop and Mode state
    };
  };
};

function estopController() { // Handels estopController
  if(power === true) {
    if (eStop === false) {
      eStop = true; // Activates eStop
      mode = "nill" // Clears Mode
      console.log("E-Stop: " + eStop + "\nMode: " + mode); // Logs eStop and Mode state
    };
  };
};

function restartEstop() {
  if(eStop === true) {
    console.log("Restarting...") // Logs initial statement
    setTimeout(function() {
      eStop=false; // Deactivates eStop
      console.log("E-Stop: " + eStop); // Logs eStop state
    }, 5000);
  };
};

function modeController() { // Handles coaster Mode
  if(power===true) {
    if(eStop===false) {
      if(mode === "nill") {
        mode = false; // Activates maintinence mode
        console.log("Mode: " + mode); // Logs ride mode (Maint.)
      } else if (mode == false) {
        mode = true; // Activates normal mode
        console.log("Mode: " + mode); // Logs ride mode (Normal)
      } else if (mode == true) {
        mode = false; // Activates Maintinence mode
        console.log("Mode: " + mode); // Logs ride mode (Maint.)
      };
    };
  };
};

function blockPannel() {
  $("#block-pannel").toggle(500); // Toggles pannel
};

function switchBlock(x) { // 'x' selects wich block is needed
  if(blocks[x] === true) {
    blocks[x] = false; // Deactivates block
    console.log(blocks[x]); // Logs block state
  } else if(blocks[x] === false) {
    blocks[x] = true; // Activates block
    console.log(blocks[x]); // Logs block state
  };
};
