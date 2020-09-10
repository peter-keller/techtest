import Controller from "./models/Controller"

const controller = new Controller(
`5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRMMMMMMMM`)

controller.createWorld()
controller.getRoverPositions()
