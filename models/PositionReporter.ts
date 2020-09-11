import Rover from "./Rover"

/**
 * Class that is responsible for displaying Rover related information
 * @constructor
 */
class PositionReporter {
  constructor () {}

  static displayRoverPositions (rovers: Rover[]) {
    rovers.forEach(({ position }) => {
      console.log(`${position.x} ${position.y} ${position.direction}`)
    })
  }
}

export default PositionReporter
