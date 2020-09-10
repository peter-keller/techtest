import validation from "../validation"
import { Orientation, Coordinate } from "../../index.types"

describe("Helpers: validatePosition", () => {
  let defaultPosition: Orientation
  const defaultBorders: Coordinate = {
    x: 5,
    y: 5
  }

  beforeEach(() => {
    defaultPosition = {
      x: 0,
      y: 0,
      direction: 'N'
    }
  })

  it('returns false if X is below zero', () => {
    expect(validation.validatePosition(defaultBorders, { ...defaultPosition, x: -1 })).toBeFalsy()
  })

  it('returns false if Y is below zero', () => {
    expect(validation.validatePosition(defaultBorders, { ...defaultPosition, y: -1 })).toBeFalsy()
  })

  it('returns false if the Y position is larger than the current position', () => {
    expect(validation.validatePosition(defaultBorders, { ...defaultPosition, y: 6 })).toBeFalsy()
  })

  it('returns false if the X position is larger than the current position', () => {
    expect(validation.validatePosition(defaultBorders, { ...defaultPosition, x: 6 })).toBeFalsy()
  })

  it('returns true if moving is permitted', () => {
    expect(validation.validatePosition(defaultBorders, { ...defaultPosition, y: 3 })).toBeTruthy()
  })
})
