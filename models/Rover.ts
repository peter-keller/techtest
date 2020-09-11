import { Orientation } from "../types/index.types"
import { Directions, CardinalPoints } from "../constants"

/**
 * Creates a Rover instance
 * @constructor
 * @param {Orientation} startingPosition - The starting point and orientation of the rover instance
 */
class Rover {
  position: Orientation

  constructor(startingPosition: Orientation) {
    this.position = startingPosition
  }

  public move (x: number, y: number) {
    this.position = { ...this.position, x, y }
  }

  public rotate(directon: string) {
    const newPosition = this.position
    const current = this.position.direction
  
    if (directon === Directions.LEFT) {
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
    } else if (directon === Directions.RIGHT) {
      switch (current) {
        case CardinalPoints.EAST :
          newPosition.direction = CardinalPoints.SOUTH
          break
        case CardinalPoints.NORTH :
          newPosition.direction = CardinalPoints.EAST
          break
        case CardinalPoints.SOUTH :
          newPosition.direction = CardinalPoints.WEST
          break
        case CardinalPoints.WEST :
          newPosition.direction = CardinalPoints.NORTH
          break
        default:
          break
      }
    }
  
    return newPosition
  }
}

export default Rover
