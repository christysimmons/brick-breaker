import {collideLogic} from "./collision-detection.js";

export default class Ball {
	constructor (game) {
		this.rad = 35;
		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
		this.game = game;
		this.position = {
			x: this.gameWidth/2,
			y: this.gameHeight - this.rad - 20
		}
		this.speed = {
			x: 2,
			y: 2
		}
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI*2);
		ctx.fillStyle = '#00F';
		ctx.fill();
		ctx.closePath();
	}

	update(deltaTime) {
		this.position.x += this.speed.x;
		this.position.y += this.speed.y;
		//if ball hits left/right border
		if (this.position.x-this.rad/4 < 0 || this.position.x > this.gameWidth-this.rad/4) {
			this.speed.x = -this.speed.x;
		}
		//if ball hits top/bottom border
		if (this.position.y-this.rad/4 < 0 || this.position.y+this.rad/4 > this.gameHeight) {
			this.speed.y = -this.speed.y;
		}
		//if ball hits paddle
		if (collideLogic(this, this.game.paddle)) {
			this.speed.y = -this.speed.y;
			this.position.y = this.position.y - this.rad/4
		}

	}

}