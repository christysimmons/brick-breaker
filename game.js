import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Brick from "./brick.js";
import {levelMaker, level1} from "./levels.js"


export default class Game {
	constructor (gameWidth, gameHeight) {
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
	}

	start() {
		this.paddle = new Paddle(this);
		this.ball = new Ball(this);

		let bricks = levelMaker(this, level1);

		this.gameObjs = [this.ball, this.paddle, ...bricks];

		new InputHandler(this.paddle);
	}

	update(deltaTime) {
		this.gameObjs.forEach(object => object.update(deltaTime));
	}

	draw(ctx) {
		this.gameObjs.forEach(object => object.draw(ctx));
	}
}