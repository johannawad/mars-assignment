"use strict";

const Direction = require("./Direction");

class Rover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  goLeft() {
    this.direction = Direction.North;
  }

  getDirection() {
    return this.direction;
  }
}

module.exports = Rover;
