"use strict";

const Direction = require("./Direction");

const compass = [
  Direction.North,
  Direction.West,
  Direction.South,
  Direction.East,
];

class Rover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  turn(turningCompass) {
    const current = turningCompass.indexOf(this.direction);
    this.direction = turningCompass[(current + 1) % 4];
  }

  goLeft() {
    this.turn(compass);
  }

  goRight() {
    this.turn(compass.reverse());
    compass.reverse();
  }

  getDirection() {
    return this.direction;
  }
}

module.exports = Rover;
