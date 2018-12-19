/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class OrderType extends Enum {
    public static LIMIT: string = 'LIMIT';
    public static LIMIT_ON_CLOSE: string = 'LIMIT_ON_CLOSE';
    public static MARKET_ON_CLOSE: string = 'MARKET_ON_CLOSE';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'LIMIT' &&
                value !== 'LIMIT_ON_CLOSE' &&
                value !== 'MARKET_ON_CLOSE') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
