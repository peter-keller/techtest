import { Orientation } from "../index.types"
import { CardinalPoints, CoordinationMap } from "../constants"

function move(position: Orientation) {
	const newPosition = position
	const { direction } = position
	let { x, y } = position

	switch (direction) {
		case CardinalPoints.EAST :
			++x
			break
		case CardinalPoints.NORTH :
			++y
			break
		case CardinalPoints.SOUTH :
			--y
			break
		case CardinalPoints.WEST :
			--x
			break
		default:
			break
	}

	newPosition.x = x
	newPosition.y = y

	return newPosition
}

function rotate(position: Orientation, action: string) {
	const newPosition = position
	const current = position.direction

	// @ts-ignore
	newPosition.direction = CoordinationMap[action][current]

	return newPosition
}

export default { move, rotate }
