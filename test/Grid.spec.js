const expect = require("chai").expect;
const Grid = require("../src/Grid");
const Rover = require("../src/Rover");
const Direction = require("../src/Direction");
describe("Grid", () => {
  it("is empty", () => {
    const grid = new Grid();
    expect(grid.getRover()).to.eq(undefined);
  });

  it("drops a rover", () => {
    const rover = new Rover(4, 7, Direction.East);
    const grid = new Grid(rover);
    expect(grid.getRover()).to.eq(rover);
  });
});
