import Rover from "./Rover";
import Mars from "./Mars";
import PositionCalculator from "./PositionCalculator";
import { Directions } from "../constants";

/**
 * Class that is responsible for navigating Rover instances
 * @constructor
 * @param {PositionCalculator} positionCalculator - PositionCalculator instance to handle validation
 */
class PositioningEngine {
  positionCalculator: PositionCalculator

  constructor () {
    this.positionCalculator = new PositionCalculator()
  }

  private moveRover (rover: Rover, planet: Mars) {
    let { x, y } = this.positionCalculator.calculatePosition(rover, planet)

    rover.move(x, y)
  }

  private rotateRover (rover: Rover, direction: string) {
    rover.rotate(direction)
  }

  public commandRover (rover: Rover, planet: Mars, command: string) {
    if (command === Directions.LEFT || command === Directions.RIGHT) {
      this.rotateRover(rover, command)
    } else if (command === Directions.MOVE) {
      this.moveRover(rover, planet)
    }
  }
}

export default PositioningEngine
