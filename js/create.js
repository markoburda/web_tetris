function createSpace(x, y){
	const matrix = [];
	while(y > 0){
		y--;
		matrix.push(new Array(x).fill(0));
	}
	return matrix;
}

function project(space, client){
	client.matrix.forEach((row, y) => {
		row.forEach((val, x) => {
			if (val !== 0) {
				space[y + client.input.y][x + client.input.x] = 1;
			}
		});
	});
}

function newTile(){
	color = Math.floor(Math.random() * tiles.length);
	client.matrix = tiles[color];
	client.input.y = 0;
	client.input.x = Math.floor(space.length / 2) - Math.floor(client.matrix.length / 2);
	if(collide(space, client)){
		var gameOver = document.createTextNode("GAME OVER");
		document.body.appendChild(gameOver);
	}
}