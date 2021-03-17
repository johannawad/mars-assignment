const expect = require("chai").expect;
const Rover = require("../src/Rover");
const Direction = require("../src/Direction");

describe("Rover", () => {
  const tests = [{ args: Direction.East, expected: Direction.North }];
  tests.forEach(({ args, expected }) => {
    it(`changes direction from ${args} to ${expected}`, () => {
      const rover = new Rover(4, 7, args);
      rover.goLeft();
      expect(rover.getDirection()).to.eq(expected);
    });
  });
});
