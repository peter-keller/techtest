import { Coordinate } from "../index.types"
import chunk from "../helpers/chunk-array"
import convertToInteger from "../helpers/convert-to-integer"

export function translateArguments (args: string) {
  const [startingPoint, ...lines] = args.split(/\r?\n|\r/g)

  return {
    borderSize: setBoundary(convertToInteger(startingPoint.split(' '))),
    rovers: chunk(lines, 2)
  }
}

export function transformPosition (args: any) {
  const [x, y, direction] = args.split(" ")

  return {
    x,
    y,
    direction
  }
}

function setBoundary ([x, y]: number[]): Coordinate {
  return { x, y }
}
