import { Coordinate, Orientation } from "../index.types"
import instructions from "../helpers/instructions"
import { Directions } from "../constants"

/**
 * Creates a Rover isntance
 * @constructor
 * @param {Coordinate} boundaries - The maximum size of the area where the rovers explore
 * @param {Orientation} startingPosition - The starting point and orientation of the rover instance
 */
class Rover {
  boundaries: Coordinate
  position: Orientation

  constructor(
    boundaries: Coordinate,
    startingPosition: Orientation
  ) {
    this.boundaries = boundaries
    this.position = startingPosition
  }

  public move (commands: string) {
    const orders = commands.split("")
    orders.forEach(movement => {
      if (movement === Directions.LEFT || movement === Directions.RIGHT) {
        this.position = instructions.rotate(this.position, movement)
      } else if (movement === Directions.MOVE) {
        this.position = instructions.move(this.position)
      }
    })
  }
}

export default Rover

// const {
//   plateauSize,
//   startingPosition,
//   commands
// } = translateArguments(
// `5 5
// 1 2 N
// LMLMLMLMM
// 3 3 E
// MMRMMRMRRM`)

// const rover = new Rover(plateauSize, startingPosition)
