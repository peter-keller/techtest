import { Coordinate } from "../types/index.types"

/**
 * Creates a Mars instance
 * @constructor
 * @param {Coordinate} area - The maximum size of the area where the rovers explore
 */
class Mars {
  area: Coordinate

  constructor (area: Coordinate) {
    this.area = area
  }

  public isValidPoint (x: number, y: number): boolean {
    if (x < 0 || y < 0) return false

    if (x > this.area.x) return false

    if (y > this.area.y) return false

    return true
  }
}

export default Mars
