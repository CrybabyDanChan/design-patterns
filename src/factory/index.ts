

class AUTO {
    public name: string;

    constructor(
        public model: string,
        public price: number,
        public speed: number
    ) {
        this.name = 'no name';
        this.model = model;
        this.price = price;
        this.speed = speed
    }

    run() {
        console.log('run')
    }
}

class BMW extends AUTO {

    constructor(
        public model: string,
        public price: number,
        public speed: number
    ) {
        super(model, price, speed);
        this.name = 'BMW'
    }

    run() {
        console.log('brrrrr')
    }
}

class Mercedes extends AUTO{
    constructor(
        public model: string,
        public price: number,
        public speed: number
    ) {
        super(model, price, speed);
        this.name = 'Mercedes'
    }

    run() {
        console.log('mmmmmmmmmuuuu')
    }
}


class AUTOFactory {
    create(name: string) {
        if (name === "BMW") {
            return new BMW('x5', 20000000, 300)
        }

        return new Mercedes('cls', 30000000, 400)
    }
}

const factory = new AUTOFactory();

const x5 = factory.create('Mercedes')
x5.run()
