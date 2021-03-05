class AUTO {
    constructor(model, price, speed) {
        this.name = 'no name';
        this.model = model;
        this.price = price;
        this.speed = speed
    }

    run() {
        console.log('run')
    }
}

class BMW extends AUTO{
    constructor() {
        super();
        this.name = 'BMW'
    }

    run() {
        console.log('brrrrr')
    }
}

class Mercedes extends AUTO{
    constructor() {
        super();
    }

    run() {
        console.log('mmmmmmmmmuuuu')
    }
}


class AUTOFactory {
    create(name) {
        if (name === "BMW") {
            return new BMW('x5', 20000000, 300)
        }

        return new Mercedes('cls', 30000000, 400)
    }
}

const factory = new AUTOFactory();

const x5 = factory.create('Mercedes')
x5.run()
