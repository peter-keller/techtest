import RoverFactory from "../RoverFactory"
import Rover from "../Rover"
import Mars from "../Mars"

describe("Models: RoverFactory", () => {
  const planet = new Mars({ x: 5, y: 5 })

  it("generates a new Rover instance with the given position if it's valid", () => {
    const roverPosition = {
      x: 3,
      y: 3,
      direction: 'N'
    }

    const newRover = RoverFactory.createRover(roverPosition, planet)
    expect(newRover).toBeInstanceOf(Rover)
    expect(newRover.position).toEqual(roverPosition)
  })

  it("generates a new Rover instance with default position if given is invalid", () => {
    const roverPosition = {
      x: 12,
      y: 3,
      direction: 'N'
    }

    const newRover = RoverFactory.createRover(roverPosition, planet)
    expect(newRover).toBeInstanceOf(Rover)
    expect(newRover.position).toEqual({ x: 0, y: 0, direction: 'N' })
  })
})
