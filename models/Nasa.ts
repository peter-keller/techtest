import Rover from "./Rover"
import Mars from "./Mars"
import PositioningEngine from "./PositioningEngine"
import RoverFactory from "./RoverFactory"
import convertToInteger from "../helpers/convert-to-integer"
import { translateArguments, transformPosition } from "../utils/translate-arguments"

/**
 * Class that instanciates a NASA base, with it's own area and responsible for generating/moving Rovers
 * @constructor
 * @param {string} commands - User input that is supplied for generating the Rovers
 * @param {Rover} rovers - The total amount of Rovers available on the NASA base
 * @param {Mars} planet - Planet size where the Rovers can move
 * @param {PositioningEngine} positioningEngine - PositioningEngine that's executing the movement commands
 */
class Nasa {
  commands: string
  rovers: Rover[]
  planet: Mars
  positioningEngine: PositioningEngine

  constructor (commands: string) {
    this.commands = commands
    this.rovers = []
    this.planet = {} as Mars
    this.positioningEngine = new PositioningEngine()
  }

  public createWorld () {
    const { mapSize, rovers } = translateArguments(this.commands)

    this.planet = new Mars(mapSize)
    
    rovers.forEach(details => {
      const rover = this.createRover(transformPosition(details[0]))
      this.processCommands(rover, details[1])
    })
  }

  private processCommands (rover: Rover, commands: string) {
    commands.split("").forEach(command => {
      this.positioningEngine.commandRover(rover, this.planet, command)
    })
  }

  private createRover (roverPosition: any) {
    const { x, y, direction } = roverPosition

    const rover = RoverFactory.createRover({
      x: convertToInteger(x),
      y: convertToInteger(y),
      direction
    }, this.planet)

    this.rovers = [...this.rovers, rover]

    return rover
  }
}

export default Nasa
