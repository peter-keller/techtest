import { Coordinate } from "../types/index.types"
import chunk from "../helpers/chunk-array"
import convertToInteger from "../helpers/convert-to-integer"

export function translateArguments (args: string) {
  const [startingPoint, ...lines] = args.split(/\r?\n|\r/g)

  return {
    mapSize: setBoundary(convertToInteger(startingPoint.split(' '))),
    rovers: chunk(lines, 2)
  }
}

export function transformPosition (args: string) {
  const [x, y, direction] = args.split(" ")

  return {
    x,
    y,
    direction
  }
}

export function setBoundary ([x, y]: number[]): Coordinate {
  return { x, y }
}
