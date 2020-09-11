import PositionReporter from "../PositionReporter"
import Rover from "../Rover"

describe("Models: PositionReporter", () => {
  const position = { x: 1, y: 1, direction: 'N' }
  const rovers = [new Rover(position), new Rover({ ...position, x: 12 })]

  it("logs the rover positions on the console", () => {
    console.log = jest.fn()
    PositionReporter.displayRoverPositions(rovers)

    expect(console.log).toHaveBeenCalledTimes(rovers.length)
  })
})
