import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.code}`;
  }

  static convertPrice(price, conversionRate) {
    if (!(price instanceof Pricing)) {
      throw new TypeError('price must be an instance of Pricing');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    const convertedAmount = price.amount * conversionRate;
    return new Pricing(convertedAmount, price.currency);
  }
}
