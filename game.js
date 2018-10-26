import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Brick from "./brick.js";
import {levelMaker, level1} from "./levels.js"

const playState = {
	pause: 0,
	run: 1,
	menu: 2,
	gameOver: 3
};


export default class Game {
	constructor (gameWidth, gameHeight) {
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
		this.state = playState.menu;
		this.paddle = new Paddle(this);
		this.ball = new Ball(this);
		this.gameObjs = [];
		new InputHandler(this.paddle, this);
	}

	start() {
		let bricks = levelMaker(this, level1);
		this.gameObjs = [this.ball, this.paddle, ...bricks];
		this.state = playState.run;
	}

	update(deltaTime) {
		if (this.state === playState.pause || this.state === playState.menu) return;
		this.gameObjs.forEach(object => object.update(deltaTime));
		this.gameObjs = this.gameObjs.filter(object => !object.futureDelete);
	}

	draw(ctx) {
		this.gameObjs.forEach(object => object.draw(ctx));

		if (this.state === playState.menu) {
			ctx.beginPath();
			ctx.rect(0,0, this.gameWidth, this.gameHeight);
			ctx.fillStyle = "rgba(0,0,0,.03)"
			ctx.fill();

			ctx.font = "30px Arial";
			ctx.fillStyle = "rgba(0,0,0,.7)";
			ctx.textAlign = "center";
			ctx.fillText("Press spacebar to begin", 400, 300);
			ctx.fillText("Press enter to pause", 400, 350);

		}

		if (this.state === playState.pause) {
			ctx.beginPath();
			ctx.rect(0,0, this.gameWidth, this.gameHeight);
			ctx.fillStyle = "rgba(0,0,0,.03)"
			ctx.fill();

			ctx.font = "30px Arial";
			ctx.fillStyle = "rgba(0,0,0,.7)";
			ctx.textAlign = "center";
			ctx.fillText("Paused", 400, 300);

		}
	}

	togglePause() {
		//
		if (this.state == playState.pause) {
			this.state = playState.run
		} else {
			this.state = playState.pause;
		}
	}
}