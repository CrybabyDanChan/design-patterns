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
const a = new Counter()
const b = new Counter()

console.log(a === b)