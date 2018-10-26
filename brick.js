

export default class Brick {
	constructor (game, position) {
		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
		this.game = game;
		this.position = position;
		this.height = 33;
		this.width = 80;
		this.r = Math.floor(Math.random() * 256);
		this.g = Math.floor(Math.random() * 256);
		this.b = Math.floor(Math.random() * 256);

	}

	draw(ctx) {
		ctx.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update() {

	}
}