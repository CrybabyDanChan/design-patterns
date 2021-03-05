class Product {
    name: string
    quantity: number
    status: string

    constructor(
        name = '',
        quantity = 0,
        status = 'empty'
    ) {
        this.name = name;
        this.quantity = quantity;
        this.status = status
    }
}


class AutoBuilder {
    product: Product | null
    cargo: number
    finalPrice: any

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
        this.finalPrice = this.product.quantity * this.cargo;
        console.log(this.finalPrice)
    }
}


class Director {
    builder

    constructor(builder) {
        this.builder = builder;
    }

    startAutoBuilder() {
        this.builder.setProduct()
        this.builder.buyProduct()
    }
}


