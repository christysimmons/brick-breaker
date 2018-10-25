import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";


export default class Game {
	constructor (gameWidth, gameHeight) {
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
	}

	start() {
		let paddle = new Paddle(this);
		let ball = new Ball(this);

		new InputHandler(paddle);
	}
}