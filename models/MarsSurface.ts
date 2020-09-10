/**
 * Creates a MarsSurface instance
 * @constructor
 * @param {Coordinate} surfaceArea - The maximum size of the area where the rovers explore
 */

class MarsSurface {
  surfaceArea: number

  constructor (surfaceArea: number) {
    this.surfaceArea = surfaceArea
  }

  public generateRovers (commands: string) {

  }
}

export default MarsSurface

const surface = new MarsSurface(5)
