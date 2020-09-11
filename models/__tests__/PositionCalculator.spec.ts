import PositionCalculator from "../PositionCalculator"
import Mars from "../Mars"
import Rover from "../Rover"

describe("Models: PositionCalculator", () => {
  const position = { x: 1, y: 1, direction: 'N' }

  let roverMock = {
    position,
    move: jest.fn(),
    rotate: jest.fn()
  } as unknown as Rover

  const planetMock = {
    area: { x: 5, y: 5 },
    isValidPoint: jest.fn().mockReturnValue(true)
  } as unknown as Mars

  const positionCalculator = new PositionCalculator()

  it("instanciates a new class", () => {
    expect(positionCalculator).toBeInstanceOf(PositionCalculator)
  })

  describe("#calculatePosition", () => {
    it("changes the location when facing north", () => {
      expect(positionCalculator.calculatePosition(roverMock, planetMock))
        .toEqual({ x: 1, y: 2 })
    })

    it("changes the location when facing east", () => {
      roverMock.position = { ...roverMock.position, direction: 'E' }

      expect(positionCalculator.calculatePosition(roverMock, planetMock))
        .toEqual({ x: 2, y: 1 })
    })

    it("changes the location when facing south", () => {
      roverMock.position = { ...roverMock.position, direction: 'S' }

      expect(positionCalculator.calculatePosition(roverMock, planetMock))
        .toEqual({ x: 1, y: 0 })
    })

    it("changes the location when facing west", () => {
      roverMock.position = { ...roverMock.position, direction: 'W' }

      expect(positionCalculator.calculatePosition(roverMock, planetMock))
        .toEqual({ x: 0, y: 1 })
    })
  })
})