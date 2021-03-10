class Counter {
    static instance

    constructor() {
      if (Counter.instance) {
        return Counter.instance;
      }

      this.count = 0;
      Counter.instance = this;
    }
}

export { Counter };
