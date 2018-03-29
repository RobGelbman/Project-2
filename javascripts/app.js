// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: new Array()
}
// ======================

var turn = "left";
var travelLogLocations = "";
var commands = "rffrffflfrfrflff";
var grid = [
  [null, null, null, "obstacle", null, "obstacle", null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  ["obstacle", null, "obstacle", null, null, null, "obstacle", null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, "obstacle", null, null, null,  "obstacle", null, null, null, null],
  [null, null, null, null, "obstacle", null, null, null, "obstacle", null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, "obstacle", null, null, null, null, null, "obstacle"],
  [null, "obstacle", null, "obstacle", null, null, null, null, null, "obstacle"]
];



function turnLeft(rover){
  turn = "left";
  rotateRover(turn, rover);
  console.log("turnLeft was called!");
}

function turnRight(rover){
  turn = "right";
  rotateRover(turn, rover);
  console.log("turnRight was called!");
}

function moveForward(rover){
  switch (rover.direction){
    case "N":
      if (rover.y > 0){
        if (grid[rover.y-1][rover.x] === "obstacle"){
          console.log("There is an obstacle in your path");
        } else {
          rover.y -= 1;
        }
      }
      break;
    case "W":
      if (rover.x > 0){
        if (grid[rover.y][rover.x-1] === "obstacle"){
          console.log("There is an obstacle in your path");
        } else {
          rover.x -= 1;
        }
      }
      break;
    case "S":
      if (rover.y < 9){
        if (grid[rover.y+1][rover.x] === "obstacle"){
          console.log("There is an obstacle in your path");
        } else {
          rover.y += 1;
        }
      }
      break;
    case "E":
      if (rover.x < 9){
        if (grid[rover.y][rover.x+1] === "obstacle"){
          console.log("There is an obstacle in your path");
        } else {
          rover.x += 1;
        }
      }
      break;
    default:
      console.log("invalid movement");
      break;
  }
  console.log("Current coordinates: [" + rover.y + ", " + rover.x + "]");
}

function moveBackward(rover){
  switch (rover.direction){
    case "N":
      if (rover.y < 9){
        rover.y += 1;
      }
      break;
    case "W":
      if (rover.x < 9){
        rover.x += 1;
      }
      break;
    case "S":
      if (rover.y > 0){
        rover.y -= 1;
      }
      break;
    case "E":
      if (rover.x > 0){
        rover.x -= 1;
      }
      break;
    default:
      console.log("invalid movement");
      break;
  }
  console.log("Current coordinates: [" + rover.y + ", " + rover.x + "]");
}

function rotateRover (turn, rover){
  switch (turn){
    case "left":
      switch (rover.direction){
        case "N":
          rover.direction = "W";
          break;
        case "W":
          rover.direction = "S";
          break;
        case "S":
          rover.direction = "E";
          break;
        case "E":     
          rover.direction = "N";
          break;
        default:
          console.log("You are facing in an invalid direction");
          break;
      }
    case "right":
      switch (rover.direction){
        case "N":
          rover.direction = "E";
          break;
        case "W":
          rover.direction = "N";
          break;
        case "S":
          rover.direction = "W";
          break;
        case "E":      
          rover.direction = "S";
          break;
        default:
          console.log("You are facing in an invalid direction");
          break;
      }
      default:
    console.log("Please enter Left or Right");
  }
}

function runCommands (commands) {
  for (i = 0; i < commands.length; i++){
    rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
    switch (commands[i]){
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      default:
        break;
    }
  }
  displayTravelLog();
}

function displayTravelLog (){
  for (i=0; i < rover.travelLog.length; i++){
    if (i === rover.travelLog.length - 1){
      travelLogLocations += rover.travelLog[i];
    } else {
      travelLogLocations += rover.travelLog[i] + ", ";
    }
  }
  console.log(travelLogLocations);
}