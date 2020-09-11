import Mars from "../Mars"
import Nasa from "../Nasa"
import Rover from "../Rover"

describe("Models: Nasa", () => {
  let nasa: Nasa
  const commands = 
`5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRMMMMMMMM`

  beforeEach(() => {
    nasa = new Nasa(commands)
  })

  it("instanciates a new class", () => {
    expect(nasa).toBeInstanceOf(Nasa)
  })

  it("creates world and rovers", () => {
    nasa.createWorld()

    expect(nasa.planet).toBeInstanceOf(Mars)
    expect(nasa.rovers).toHaveLength(2)
    expect(nasa.rovers[0]).toBeInstanceOf(Rover)
  })
})
