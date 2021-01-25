/*
Beta_Build-0.2;
Compile Date: 25/1/21;
Days working on build: 8;
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
var verString = "Beta_Build-0.2" // Allows webpage to check version of Engine
var sound = true; // true = On, false = Off

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
    case 70: // 'F'
      document.getElementById("simContainer").requestFullscreen();
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

function soundController() {
  if(sound===true) {
    $("#controlOption2").html("<path d=\"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z\" />");
    sound = false;
  } else if(sound===false) {
    $("#controlOption2").html("<path d=\"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z\" />")
    sound=true;
  };
};
