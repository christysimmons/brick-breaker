import Brick from "./brick.js"


export function levelMaker(game, level) {
	let bricks = [];

	level.forEach((row, rowInd) => {
		row.forEach((brick, brickInd) => {
			if (brick === 1) {
				let position = {
					x: brickInd * 80,
					y: 15 + rowInd * 33
				}
				bricks.push(new Brick(game, position))
			}
		})
	})

	return bricks;
}

const level1 = [
	[0,1,0,1,0,1,0,1,0,1],
	[1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1]

];

const level2 = [
	[0,1,0,1,0,1,0,1,0,1],
	[1,0,1,1,0,1,1,1,1,1],
	[1,1,0,1,1,1,0,1,1,1],
	[1,0,1,1,1,1,1,1,0,1]
]

export const levels = [level1, level2];