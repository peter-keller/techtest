import Rover from "../Rover"
import { Orientation, Coordinate } from "../../index.types"

describe("Rover", () => {
  const defaultBorders: Coordinate = { x: 5, y: 5 }
  let defaultStartingPosition: Orientation

  beforeEach(() => {
    defaultStartingPosition = {
      x: 0,
      y: 0,
      direction: 'N'
    }
  })

  it('instantiates class', () => {
    const rover = new Rover(defaultBorders, defaultStartingPosition)

    expect(rover).toBeInstanceOf(Rover)
  })

  it("calls 'move' method on the instance", () => {
    const rover = new Rover(defaultBorders, defaultStartingPosition)
    const moveSpyOn = jest.spyOn(rover, 'move')
    rover.move('LL')

    expect(moveSpyOn).toHaveBeenCalledWith('LL')
  })
})
