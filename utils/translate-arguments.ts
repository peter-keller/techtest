import { Coordinate } from "../index.types"

export default function translateArguments (args: string) {
  const [startingPoint, ...lines] = args.split(/\r?\n|\r/g)
  const [x, y, direction] = lines[0].split(' ')

  return {
    plateauSize: setBoundary(convertToInteger(startingPoint.split(' '))),
    // @ts-ignore
    startingPosition: setStartingPosition([...convertToInteger([x, y]), direction]),
    commands: lines[1]
  }
}

function setStartingPosition ([x, y, direction]: [number, number, string]) {
  return { x, y, direction }
}

function setBoundary ([x, y]: number[]): Coordinate {
  return { x, y }
}

function convertToInteger (args: string | string[]): any {
  return Array.isArray(args) ? args.map(arg => parseInt(arg)) : parseInt(args)
}
