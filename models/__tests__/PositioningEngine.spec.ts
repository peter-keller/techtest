import Mars from "../Mars"
import PositioningEngine from "../PositioningEngine"
import Rover from "../Rover"

describe("Models: PositioningEngine", () => {
  let positioningEngine: PositioningEngine

  const roverMock = {
    position: { x: 1, y: 1, direction: 'N' },
    move: jest.fn(),
    rotate: jest.fn()
  } as unknown as Rover

  const planetMock = {
    area: { x: 5, y: 5 },
    isValidPoint: jest.fn()
  } as unknown as Mars

  beforeEach(() => {
    positioningEngine = new PositioningEngine()
  })

  describe("private methods", () => {
    it("#moveRover - call 'move' method on Rover instance", () => {
      positioningEngine['moveRover'](roverMock, planetMock)
  
      expect(planetMock.isValidPoint).toHaveBeenCalled()
      expect(roverMock.move).toHaveBeenCalled()
    })

    it("#rotateRover - call 'rotate' method on Rover instance", () => {
      positioningEngine['rotateRover'](roverMock, 'N')

      expect(roverMock.rotate).toHaveBeenCalledWith('N')
    })
  })
})