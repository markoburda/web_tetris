const playground = document.getElementById('tetris');
const context = playground.getContext('2d');

const matrix = [
	[0, 0, 0],
	[1, 1, 1],
	[0, 1, 0],
];

const client = {
	input : {x : 0, y : 0},
	matrix : matrix,
}

context.scale(20, 20);

function render(matrix, delta){
	matrix.forEach((row, y) => {
		row.forEach((val, x) => {
	        if (val !== 0) {
	            context.fillStyle = 'red';
	            context.fillRect(x + delta.x, y + delta.y, 1, 1);
	        }
    	});
	});
}

const space = createSpace(12, 20);

function collide(space, client){
	for (let y = 0; y < client.matrix.length; y++){
		for(let x = 0; x < client.matrix[y].length; x++){
			if (client.matrix[y][x] !== 0 &&
				(space[y + client.input.y] && space[y + client.input.y][x + client.input.x]) !== 0){
				return true;
			}
		}
	}
	return false;
}

let timeStart = 0;
let counter = 0;

//block falls by 1 unit every second
let interval = 1000;

function draw(){
	context.fillStyle = 'black';
	context.fillRect(0, 0, playground.width, playground.height);
	render(client.matrix, client.input);
}

function update(time = 0){
	const deltaTime = time - timeStart;
	timeStart = time;
	counter += deltaTime;
	// console.log("Time:" + deltaTime);
	if(counter > interval){
		moveDown();

		
		// if(collide(space, client)){
		// 	moveUp();
		// 	project(space, client);
		// 	client.input.y = 0;
		// }


	}
	draw();
	requestAnimationFrame(update);
}

update();