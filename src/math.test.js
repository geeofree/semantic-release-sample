const math = require("./math");

describe("Math", () => {
  test("add(1, 1) = 2", () => {
    expect(math.add(1, 1)).toBe(2);
  });
});
