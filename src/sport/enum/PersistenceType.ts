/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class PersistenceType extends Enum {
    public static LAPSE: string = 'LAPSE';
    public static PERSIST: string = 'PERSIST';
    public static MARKET_ON_CLOSE: string = 'MARKET_ON_CLOSE';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'LAPSE' &&
                value !== 'PERSIST' &&
                value !== 'MARKET_ON_CLOSE') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
