class AUTO {
    name: string;
    model: string;
    price: number;
    speed: number;

    constructor(
        model: string,
        price: number,
        speed: number
    ) {
      this.model = model;
      this.price = price;
      this.speed = speed;
    }

    run() {
      console.log('run');
    }
}

class BMW extends AUTO {
  run() {
    console.log('brrrrr');
  }
}

class Mercedes extends AUTO {
  run() {
    console.log('mmmmmmmmmuuuu');
  }
}


class AutoFactory {
  create(name: string): AUTO {
    if (name === 'BMW') {
      return new BMW('x5', 20000000, 300);
    }

    return new Mercedes('cls', 30000000, 400);
  }
}

export { AutoFactory };
