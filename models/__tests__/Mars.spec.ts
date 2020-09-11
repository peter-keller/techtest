import Mars from "../Mars"

describe("Models: Mars", () => {
  const mars = new Mars({ x: 5, y: 5 })

  it("instanciates a new class", () => {
    expect(mars).toBeInstanceOf(Mars)
  })

  describe("#isValidPoint", () => {
    it("returns false if x is smaller than 0", () => {
      expect(mars.isValidPoint(-1, 2)).toBeFalsy()
    })

    it("returns false if y is smaller than 0", () => {
      expect(mars.isValidPoint(1, -2)).toBeFalsy()
    })

    it("returns false if y larger than mars's y border", () => {
      expect(mars.isValidPoint(1, 7)).toBeFalsy()
    })

    it("returns false if x larger than mars's x border", () => {
      expect(mars.isValidPoint(7, 2)).toBeFalsy()
    })

    it("returns true if given position is within the borders", () => {
      expect(mars.isValidPoint(2, 2)).toBeTruthy()
    })
  })
})
