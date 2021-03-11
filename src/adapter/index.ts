interface RoundHoleInterface {
    radius: number;
}

interface RoundPegInterface {
    radius: number;
}

class RoundHole implements RoundHoleInterface {
    radius: number;

    constructor(radius: number) {
      this.radius = radius;
    }

    fits(peg: RoundPegInterface): boolean {
      const result = this.radius >= peg.radius;
      return result;
    }
}

class RoundPeg implements RoundPegInterface {
    radius: number;

    constructor(radius: number) {
      this.radius = radius;
    }
}

class SquarePeg {
    width: number;

    constructor(width: number) {
      this.width = width;
    }
}

class SquarePegAdapter extends RoundPeg {
    private peg: SquarePeg

    constructor(peg: SquarePeg) {
      super(peg.width);
      this.peg = peg;
    }

    getRadius(): number {
      return this.peg.width / Math.sqrt(2);
    }
}

export {
  RoundHole,
  SquarePeg,
  SquarePegAdapter,
  RoundPeg,
};

