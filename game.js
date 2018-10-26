import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Brick from "./brick.js";
import {levelMaker, levels} from "./levels.js"

const playState = {
	pause: 0,
	run: 1,
	menu: 2,
	gameOver: 3,
	newLevel: 4
};


export default class Game {
	constructor (gameWidth, gameHeight) {
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
		this.state = playState.menu;
		this.paddle = new Paddle(this);
		this.ball = new Ball(this);
		this.gameObjs = [];
		this.bricks = [];
		this.lives = 3;
		this.levelInd = 0;
		this.levels = [...levels];
		new InputHandler(this.paddle, this);
	}

	start() {
		if (this.state !== playState.menu &&
			this.state !== playState.newLevel) return;

		this.bricks = levelMaker(this, this.levels[this.levelInd]);
		this.ball.reset();
		this.gameObjs = [this.ball, this.paddle];
		this.state = playState.run;
	}

	update(deltaTime) {
		if (this.lives === 0) this.state = playState.gameOver;
		if (this.state === playState.pause || 
			this.state === playState.menu ||
			this.state === playState.gameOver ) return;


		if (this.bricks.length === 0) {
			//load new level
			this.levelInd++;
			this.state = playState.newLevel;
			this.start();

		}	
		[...this.gameObjs, ...this.bricks].forEach(object => object.update(deltaTime));
		this.bricks = this.bricks.filter(brick => !brick.futureDelete);
	}

	draw(ctx) {
		[...this.gameObjs, ...this.bricks].forEach(object => object.draw(ctx));

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

		if (this.state === playState.gameOver) {
			ctx.beginPath();
			ctx.rect(0,0, this.gameWidth, this.gameHeight);
			ctx.fillStyle = "rgba(0,0,0,.6)"
			ctx.fill();

			ctx.font = "30px Arial";
			ctx.fillStyle = "rgba(0,0,0,.7)";
			ctx.textAlign = "center";
			ctx.fillText("game over", 400, 300);
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