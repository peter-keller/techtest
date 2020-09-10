import { Orientation } from "../index.types"
import { CardinalPoints, Directions } from "../constants"

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

	if (action === Directions.LEFT) {
		switch (current) {
			case CardinalPoints.EAST :
				newPosition.direction = CardinalPoints.NORTH
				break
			case CardinalPoints.NORTH :
				newPosition.direction = CardinalPoints.WEST
				break
			case CardinalPoints.SOUTH :
				newPosition.direction = CardinalPoints.EAST
				break
			case CardinalPoints.WEST :
				newPosition.direction = CardinalPoints.SOUTH
				break
			default:
				break
		}
	} else if (action === Directions.RIGHT) {
		switch (current) {
			case CardinalPoints.EAST :
				newPosition.direction = CardinalPoints.NORTH
				break
			case CardinalPoints.NORTH :
				newPosition.direction = CardinalPoints.WEST
				break
			case CardinalPoints.SOUTH :
				newPosition.direction = CardinalPoints.EAST
				break
			case CardinalPoints.WEST :
				newPosition.direction = CardinalPoints.SOUTH
				break
			default:
				break
		}
	}

	return newPosition
}

export default { move, rotate }
