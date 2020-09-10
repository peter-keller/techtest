import { Coordinate } from "../index.types"

/**
 * Creates a MarsSurface instance
 * @constructor
 * @param {Coordinate} surfaceArea - The maximum size of the area where the rovers explore
 */
class MarsSurface {
  borderSize: Coordinate

  constructor (borderSize: Coordinate) {
    this.borderSize = borderSize
  }

  public getBorderSize () {
    return this.borderSize
  }
}

export default MarsSurface
