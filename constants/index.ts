export enum CardinalPoints {
  NORTH = "N",
  EAST = "E",
  SOUTH = "S",
  WEST = "W"
}

export enum Directions {
  LEFT = "L",
  RIGHT = "R",
  MOVE = "M"
}

export const CoordinationMap = {
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
