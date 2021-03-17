const expect = require("chai").expect;
const Rover = require("../src/Rover");
const Direction = require("../src/Direction");

describe("Rover", () => {
  const goLeftTests = [
    { args: Direction.East, expected: Direction.North },
    { args: Direction.North, expected: Direction.West },
    { args: Direction.West, expected: Direction.South },
    { args: Direction.South, expected: Direction.East },
  ];
  goLeftTests.forEach(({ args, expected }) => {
    it(`turns left from ${args} to ${expected}`, () => {
      const rover = new Rover(4, 7, args);
      rover.goLeft();
      expect(rover.getDirection()).to.eq(expected);
    });
  });

  const goRightTests = [
    { args: Direction.East, expected: Direction.South },
    { args: Direction.South, expected: Direction.West },
    { args: Direction.West, expected: Direction.North },
    { args: Direction.North, expected: Direction.East },
  ];
  goRightTests.forEach(({ args, expected }) => {
    it(`turns right from ${args} to ${expected}`, () => {
      const rover = new Rover(4, 7, args);
      rover.goRight();
      expect(rover.getDirection()).to.eq(expected);
    });
  });

  const moveForwardTests = [
    {
      args: { x: 4, y: 7, direction: Direction.North },
      expected: { y: 8, x: 4 },
    },
  ];
  moveForwardTests.forEach(({ args, expected }) => {
    it(`moves forward when facing the ${args.direction}`, () => {
      const { x, y, direction } = args;

      const rover = new Rover(x, y, direction);
      rover.moveForward();
      expect(rover.getY()).to.eq(expected.y);
      expect(rover.getX()).to.eq(expected.x);
    });
  });
});
