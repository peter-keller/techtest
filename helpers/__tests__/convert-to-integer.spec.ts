import convertToInteger from '../convert-to-integer';

describe("Helpers: convertToInteger", () => {
  it("converts a single string to integers", () => {
    expect(convertToInteger("2")).toEqual(2)
  })

  it("converts multiple strings to integers", () => {
    expect(convertToInteger(["1", "2", "3"])).toEqual([1, 2, 3])
  })
})
