import {
  setBoundary,
  transformPosition,
  translateArguments
} from "../translate-arguments"

describe("Utils: translate-arguments", () => {
  describe("#translateArguments", () => {
    it("translates arguments and separates border and rover commands", () => {
      expect(translateArguments(`5 5\n 1 2 N \n LLLML`)).toEqual({
        mapSize: { x: 5, y: 5 },
        rovers: [[" 1 2 N ", " LLLML"]]
      })
    })
  })

  describe("#transformPosition", () => {
    it("transform position from string to object", () => {
      expect(transformPosition("1 2 N")).toEqual({
        x: "1",
        y: "2",
        direction: "N"
      })
    })
  })

  describe("#setBoundary", () => {
    it("returns x and y coordinates as an object if passed in", () => {
      expect(setBoundary([2, 3])).toEqual({ x: 2, y: 3 })
    })
  })
})
