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



export const level1 = [
	[0,1,0,1,0,1,0,1,0,1],
	[1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1]

]