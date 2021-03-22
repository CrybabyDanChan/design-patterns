class Account {
    incomer: Account
    name: string
    balance: number

    constructor(balance: number) {
      this.balance = balance;
    }

    pay(orderPrice: number) {
      if (this.canPay(orderPrice)) {
        console.log(`Paid ${orderPrice} using ${this.name}`);
      } else if (this.incomer) {
        console.log(`Cannot pay using ${this.name}`);
        this.incomer.pay(orderPrice);
      } else {
        console.log('Unfortunately, not enough money');
      }
    }

    canPay(amount: number): boolean {
      return this.balance >= amount;
    }

    setNext(account: Account) {
      this.incomer = account;
    }
}

class Master extends Account {
  constructor(balance) {
    super(balance);
    this.name = 'Master Card';
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance) {
    super(balance);
    this.name = 'Paypal';
    this.balance = balance;
  }
}

class Qiwi extends Account {
  constructor(balance) {
    super(balance);
    this.name = 'Qiwi';
    this.balance = balance;
  }
}

export {
  Master,
  Paypal,
  Qiwi,
};
