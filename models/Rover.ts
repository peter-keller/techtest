import { Coordinate, Orientation } from "../index.types"
import instructions from "../helpers/instructions"
import validatePosition from "../helpers/validation"
import { Directions } from "../constants"

/**
 * Creates a Rover isntance
 * @constructor
 * @param {Coordinate} borderSize - The maximum size of the area where the rovers explore
 * @param {Orientation} startingPosition - The starting point and orientation of the rover instance
 */
class Rover {
  borderSize: Coordinate
  position: Orientation

  constructor(
    borderSize: Coordinate,
    startingPosition: Orientation
  ) {
    this.borderSize = borderSize
    this.position = startingPosition
  }

  get location () {
    const { x, y, direction } = this.position
    return `${x} ${y} ${direction}`
  }

  public move (commands: string) {
    const orders = commands.split("")
    let position = this.position

    orders.forEach(movement => {
      if (movement === Directions.LEFT || movement === Directions.RIGHT) {
        position = instructions.rotate(position, movement)
      } else if (movement === Directions.MOVE) {
        position = instructions.move(position)
      }

      if (validatePosition(this.borderSize, position)) {
        this.position = position
      }
    })
  }
}

export default Rover
