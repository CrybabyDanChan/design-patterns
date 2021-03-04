class Product {
    constructor(
        name = '',
        quantity = 0,
        status = 'empty'
    ) {
        this.name = name;
        this.quntity = quantity;
        this.status = status
    }
}


class AutoBuilder {
    constructor() {
        this.product = null;
        this.cargo = 40;
        this.finalPrice = null;
    }

    setProduct() {
        const quantity = Math.floor(Math.random())
        this.product = new Product('auto', quantity, 'initialized')
    }

    buyProduct() {
        this.finalPrice = this.product.quntity * this.cargo;
        console.log(this.finalPrice)
    }
}


class Director {
    constructor(builder) {
        this.builder = builder;
    }

    startAutoBuilder() {
        this.builder.setProduct()
        this.builder.buyProduct()
    }
}


