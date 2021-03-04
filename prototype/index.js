class Shape {
    width;
    height;

    constructor(source) {
        if (!source) {
            return;
        }

        this.width = source.width;
        this.height = source.height;
    }

    clone() {
        return new Shape(this)
    }
}

class Rect extends Shape{
    constructor(source) {
        super(source)

        if (!source) {
            return;
        }

        this.width = source.width;
        this.height = source.height;
    }

    clone() {
        return new Rect(this)
    }
}
