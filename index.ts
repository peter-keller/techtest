import Nasa from "./models/Nasa"
import PositionReporter from "./models/PositionReporter"

const NasaBase = new Nasa(
`5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRMMMMMMMM`)

NasaBase.createWorld()

PositionReporter.displayRoverPositions(NasaBase.rovers)
