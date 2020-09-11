import Mars from "./Mars";
import Rover from "./Rover";
import { Coordinate } from "../types/index.types";
import { CardinalPoints } from "../constants";

/**
 * Class that is responsible for validating the movement of Rover instances
 * @constructor
 */
class PositionCalculator {
  constructor () {}

  public calculatePosition (rover: Rover, planet: Mars): Coordinate {
    let { direction, x, y } = rover.position
  
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
  
    if (planet.isValidPoint(x, y)) {
      return { x, y }
    }

    return { x: rover.position.x, y: rover.position.y }
  }
}

export default PositionCalculator
