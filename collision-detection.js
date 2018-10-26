export function collideLogic(ball, gameObject) {
			//collision with paddle
	let ballEnd = ball.position.y + ball.rad/4;
	let ballStart = ball.position.y - ball.rad/4;


	let gameObjectTop = gameObject.position.y;
	let gameObjectLeft = gameObject.position.x;
	let gameObjectRight = gameObject.position.x + gameObject.width;
	let gameObjectBottom = gameObject.position.y + gameObject.height;

	if (ballEnd >= gameObjectTop 
		&& ballStart <= gameObjectBottom
		&& gameObjectLeft < ball.position.x 
		&& ball.position.x < gameObjectRight
		) {
		return true;
	} else {
		return false;
	}
}