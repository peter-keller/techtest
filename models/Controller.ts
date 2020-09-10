import Rover from "./Rover"
import MarsSurface from "./MarsSurface"
import convertToInteger from "../helpers/convert-to-integer"
import { translateArguments, transformPosition } from "../utils/translate-arguments"
import { Orientation } from "../index.types"

class Controller {
  commands: string
  rovers: Rover[]
  borders: MarsSurface

  constructor (commands: string) {
    this.commands = commands
    this.rovers = []
    this.borders = {} as MarsSurface
  }

  public createWorld () {
    const { borderSize, rovers } = translateArguments(this.commands)

    this.borders = new MarsSurface(borderSize)
    
    rovers.forEach(details => {
      const rover = this.createRover(transformPosition(details[0]))
      this.moveRover(rover, details[1])
    })
  }

  public getRoverPositions () {
    this.rovers.forEach(rover => {
      console.log(rover.getLocation())
    })
  }

  private createRover (roverPosition: any) {
    const { x, y, direction } = roverPosition

    const rover = new Rover(
      this.borders.borderSize,
      {
        x: convertToInteger(x),
        y: convertToInteger(y),
        direction
      }
    )

    this.rovers = [...this.rovers, rover]

    return rover
  }

  private moveRover (rover: Rover, commands: string) {
    rover.move(commands)
  }
}

export default Controller
