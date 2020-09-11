import Mars from "./Mars";
import Rover from "./Rover";
import { Orientation } from "../types/index.types";
import { CardinalPoints } from "../constants";

/**
 * Rover factory that's responsible for generating Rover instances
 * @constructor
 */
class RoverFactory {
  constructor () {}

  static createRover (position: Orientation, planet: Mars) {
    let { x, y } = position
    if (planet.isValidPoint(x, y)) {
      return new Rover(position)
    }

    return new Rover({ x: 0, y: 0, direction: CardinalPoints.NORTH })
  }
}

export default RoverFactory
