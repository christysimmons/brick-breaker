import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Game from "./game.js"

//global vars
let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

const game_width = 800;
const game_height = 600;

let game = new Game(game_width, game_height);
game.start();


let lastTime = 0;




//App logic

function gameLoop (timeStamp) {
	let deltaTime = timeStamp - lastTime;
	lastTime = timeStamp;
	ctx.clearRect(0,0, game_width, game_height);
	paddle.update(deltaTime);
	paddle.draw(ctx);
	ball.update(deltaTime);
	ball.draw(ctx);

	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);