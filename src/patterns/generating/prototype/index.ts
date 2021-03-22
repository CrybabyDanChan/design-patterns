class Shape {
    width: number;
    height: number;

    constructor(source: Shape) {
      if (!source) {
        return;
      }

      this.width = source.width;
      this.height = source.height;
    }

    clone() {
      return new Shape(this);
    }
}

class Rect extends Shape {
  constructor(source: Rect = null) {
    super(source);

    if (!source) {
      return;
    }

    this.width = source.width;
    this.height = source.height;
  }

  clone(): Rect {
    return new Rect(this);
  }
}

export { Rect };
