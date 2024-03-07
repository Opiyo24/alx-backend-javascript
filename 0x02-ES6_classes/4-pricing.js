import Currency from './30currency'

class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    /**
     * @param {Number} amount
     */
    set amount(amount) {
        if (typeof amount !== 'number') {
            throw new TypeError('Amount must be a Number');
        }
        this._amount = amount;
    }

    get amount() {
        return this._amount;
    }

    /**
     * @param {Currency} currency
     */
    set currency(currency) {
        if (!(currency instanceof Currency)) {
            throw new TypeError('Currency must be a Currency');
        }
        this._currency = currency;
    }

    get currency() {
        return this._currency;
    }

    displayFullPrice() {
        return `${this.amount} ${this.currency.displayFullCurrency()}`;
    }

    /**
     * @param {Number} amount
     * @param {Number} conversionRate
     */
    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number') {
            throw new TypeError('Amount must be a Number');
        }

        if (typeof conversionRate !== 'number') {
            throw new TypeError('conversionRate must be a Number');
        }

        return amount * conversionRate;
    }
}
export default Pricing;