class AUTO {
    public name: string;
    public model: string;
    public price: number;
    public speed: number;

    constructor(
        model: string,
        price: number,
        speed: number
    ) {
      this.name = 'no name';
      this.model = model;
      this.price = price;
      this.speed = speed;
    }

    run() {
      console.log('run');
    }
}

class BMW extends AUTO {
  constructor(
        public model: string,
        public price: number,
        public speed: number
  ) {
    super(model, price, speed);
    this.name = 'BMW';
  }

  run() {
    console.log('brrrrr');
  }
}

class Mercedes extends AUTO {
  constructor(
        public model: string,
        public price: number,
        public speed: number
  ) {
    super(model, price, speed);
    this.name = 'Mercedes';
  }

  run() {
    console.log('mmmmmmmmmuuuu');
  }
}


class AutoFactory {
  create(name: string) {
    if (name === 'BMW') {
      return new BMW('x5', 20000000, 300);
    }

    return new Mercedes('cls', 30000000, 400);
  }
}

export {AutoFactory};


