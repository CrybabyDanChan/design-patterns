interface RoundHoleInterface {
    radius: number;
}

interface RoundPegInterface {
    radius: number;
}

class RoundHole implements RoundHoleInterface {
    radius: number;

    constructor(radius) {
        this.radius = radius
    }

    fits = (peg: RoundPegInterface): boolean => {
        const result = this.radius >= peg.radius;
        console.log(result);
        return result;
    }
}

class RoundPeg implements RoundPegInterface {
    radius: number;

    constructor(radius) {
        this.radius = radius
    }
}

class SquarePeg {
    width: number;

    constructor(width) {
        this.width = width;
    }
}

class SquarePegAdapter extends RoundPeg {
    private peg: SquarePeg

    constructor(peg) {
        super(peg);
        this.peg = peg;
    }

    getRadius(): number {
        return this.peg.width / Math.sqrt(2)
    }
}

const hole = new RoundHole(5)
const peg = new RoundPeg(4)

hole.fits(peg)
