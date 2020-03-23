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