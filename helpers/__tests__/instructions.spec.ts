import instruction from "../instructions"
import { CoordinationMap, Directions, CardinalPoints } from "../../constants"
import { Orientation } from "../../index.types"

describe("Helpers: Instructions", () => {
  let defaultPosition: Orientation

  beforeEach(() => {
    defaultPosition = {
      x: 0,
      y: 0,
      direction: CardinalPoints.NORTH
    }
  })

  describe("#move", () => {
    it("moves north 1 field", () => {
      expect(instruction.move(defaultPosition))
        .toEqual({ ...defaultPosition, y: 1 })
    })

    it("moves east 1 field", () => {
      expect(instruction.move({
        ...defaultPosition,
        direction: CardinalPoints.EAST
      })).toEqual({ x: 1, y: 0, direction: CardinalPoints.EAST })
    })

    it("moves south 1 field", () => {
      expect(instruction.move({
        ...defaultPosition,
        direction: CardinalPoints.SOUTH
      })).toEqual({ y: -1, x: 0, direction: CardinalPoints.SOUTH })
    })

    it("moves west 1 field", () => {
      expect(instruction.move({
        ...defaultPosition,
        direction: CardinalPoints.WEST
      })).toEqual({ y: 0, x: -1, direction: CardinalPoints.WEST })
    })
  })

  describe("#rotate", () => {
    const { L, R } = CoordinationMap
    

    Object.entries(L).forEach(directions => {
      it(`rotates left when facing ${directions[0]}`, () => {
        expect(instruction.rotate(
          {
            ...defaultPosition,
            direction: directions[0]
          }, Directions.LEFT
        )).toEqual({
          ...defaultPosition,
          direction: directions[1]
        })
      })
    })

    Object.entries(R).forEach(directions => {
      it(`rotates right when facing ${directions[0]}`, () => {
        expect(instruction.rotate(
          {
            ...defaultPosition,
            direction: directions[0]
          }, Directions.RIGHT
        )).toEqual({
          ...defaultPosition,
          direction: directions[1]
        })
      })
    })
  })
})
