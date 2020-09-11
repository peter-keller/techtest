import Rover from "../Rover"
import { CardinalPoints, Directions } from "../../constants"

describe("Models: Rover", () => {
  const defaultPosition = {
    x: 0,
    y: 0,
    direction: 'N'
  }

  let rover: Rover

  beforeEach(() => {
    rover = new Rover(defaultPosition)
  })

  it('instantiates class', () => {
    expect(rover).toBeInstanceOf(Rover)
  })

  it("changes the rover's position when move has been called", () => {
    expect(rover.position).toEqual(defaultPosition)
    rover.move(2, 3)
    expect(rover.position).toEqual({
      ...defaultPosition,
      x: 2,
      y: 3
    })
  })

  describe("#rotate", () => {
    const rotationMap = {
      L: {
        N: CardinalPoints.WEST,
        E: CardinalPoints.NORTH,
        S: CardinalPoints.EAST,
        W: CardinalPoints.SOUTH
      },
      R: {
        N: CardinalPoints.EAST,
        E: CardinalPoints.SOUTH,
        S: CardinalPoints.WEST,
        W: CardinalPoints.NORTH
      }
    }

    Object.entries(rotationMap.L).forEach(directions => {
      it(`rotates left when facing ${directions[0]}`, () => {
        rover.position = { ...rover.position, direction: directions[0] }

        expect(rover.rotate(Directions.LEFT)).toEqual({
          ...defaultPosition,
          direction: directions[1]
        })
      })
    })

    Object.entries(rotationMap.R).forEach(directions => {
      it(`rotates right when facing ${directions[0]}`, () => {
        rover.position = { ...rover.position, direction: directions[0] }

        expect(rover.rotate(Directions.RIGHT)).toEqual({
          ...defaultPosition,
          direction: directions[1]
        })
      })
    })
  })
})
