import { Coordinate, Orientation } from "../index.types"

function validatePosition(borders: Coordinate, position: Orientation) {
	if (position.x < 0 || position.y < 0) return false

	if (position.x > borders.x) return false

	if (position.y > borders.y) return false

	return true
}

export default { validatePosition }
