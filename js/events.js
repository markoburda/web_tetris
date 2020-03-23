function moveUp(){
  console.log('moving up');
  client.input.y--;
}

function moveDown(){
  console.log('moving down');
  client.input.y++;


  if(collide(space, client)){
      moveUp();
      project(space, client);
      client.input.y = 0;
    }

  
  counter = 0;
}

function moveRight() {
  console.log('moving right')
  client.input.x++;
}

function moveLeft() {
  console.log('moving left')
  client.input.x--;
}

function pauseGame() {
}

document.addEventListener("keydown", event => {
  switch (event.keyCode) {
    case DOWN:
      moveDown();
      break;
    case LEFT:
      moveLeft();
      break;
    case RIGHT:
      moveRight();
      break;
    case PAUSE:
      pauseGame();
      break;
    default:
      break;
  }
});