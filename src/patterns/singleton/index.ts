class Counter {
    static instance;
    count: number;

    constructor() {
      if (Counter.instance) {
        return Counter.instance;
      }

      this.count = 0;
      Counter.instance = this;
    }
}

export { Counter };
