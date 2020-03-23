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
      newTile();
      renderPositions(client.matrix, client.input);
      client.input.y = 0;
    }

  gameCounter = 0;

}

function moveTileX(x){
  client.input.x += x;
  if(collide(space, client)){
    client.input.x -= x;
  }
}

function rotateTile(tile, dir){
  let collider = 1;
  for(let y = 0; y < client.matrix.length; y++){
    for(let x = 0; x < y; x++){
      [tile[x][y], tile[y][x]] = [tile[y][x], tile[x][y]];
    }
  }
  if(dir > 0){
    tile.forEach(row => row.reverse());
  }
  else{
    tile.reverse();
  }
  // while(collide(client, space)){
  //   client.input.x += collider;
  // }
}

function moveRight() {
  console.log('moving right')
  moveTileX(1);
}

function moveLeft() {
  console.log('moving left')
  moveTileX(-1);
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
    case UP:
      rotateTile(client.matrix, 1);
      break;
    case Z:
      rotateTile(client.matrix, 0);
      break;
    default:
      break;
  }
});