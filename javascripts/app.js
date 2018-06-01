var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0,0]],
}
  
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("Rover is looking West");
      break;
    case "W":
      rover.direction = "S";
      console.log("Rover is looking South");
      break;
    case "S":
      rover.direction = "E";
      console.log("Rover is looking East");
      break;
    case "E":
      rover.direction = "N";
      console.log("Rover is looking North");  
      break;
    default:
      break;
    }
  }

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Rover is looking East");
      break;
    case "E":
      rover.direction = "S";
      console.log("Rover is looking South");
      break;
    case "S":
      rover.direction = "W";
      console.log("Rover is looking West");
      break;
    case "W":
      rover.direction = "N";
      console.log("Rover is looking North");  
      break;
    default:
      break;
    }
  }

  function moveForward(rover){
    console.log("moveForward was called");
    if(rover.direction == "N" && rover.y > 0){
      rover.y -=1;
      rover.travelLog.push([rover.x,rover.y]);
    } else if (rover.direction == "W" && rover.x > 0){
      rover.x -=1;
      rover.travelLog.push([rover.x,rover.y]);
    } else if(rover.direction == "S" && rover.y < 9){
      rover.y +=1;
      rover.travelLog.push([rover.x,rover.y]);
    } else if(rover.direction == "E" && rover.x < 9){
      rover.x +=1;
      rover.travelLog.push([rover.x,rover.y]);
    } else {
      console.log("Rover can't go forward!")
    }
   console.log ("Rover's position is now [" + rover.x + "," + rover.y + "].");
  }
  
  function moveBackward(rover){
    console.log("moveBackward was called");
    if(rover.direction == "N" && rover.y < 9){
      rover.y +=1;
    } else if (rover.direction == "W" && rover.x < 9){
      rover.x +=1;
      rover.travelLog.push([rover.x,rover.y]);
    } else if(rover.direction == "S" && rover.y > 0){
      rover.y -=1;
      rover.travelLog.push([rover.x,rover.y]);
    } else if(rover.direction == "E" && rover.x > 0){
      rover.x -=1;
      rover.travelLog.push([rover.x,rover.y]);
    } else {
      console.log("Rover can't go backward!")
    }
   console.log ("Rover's position is now [" + rover.x + "," + rover.y + "].");
  }
  
  function moveOrder(string){
    for (var i = 0; i < string.length; i++){
      if(string[i] === "r"){
        turnRight(rover);
      } else if(string[i] === "l"){
        turnLeft(rover);
      }else if(string[i] === "f"){
        moveForward(rover);
      } else if(string[i] === "b"){
        moveBackward(rover);
      } else {
      console.log("It's not a valid order");
      }
    }
   console.log(rover.travelLog);
  }
  
  moveOrder("rffbrfbfblfrbff");
  
  


