/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class PriceData extends Enum {
    public static SP_AVAILABLE: string = 'SP_AVAILABLE';
    public static SP_TRADED: string = 'SP_TRADED';
    public static EX_BEST_OFFERS: string = 'EX_BEST_OFFERS';
    public static EX_ALL_OFFERS: string = 'EX_ALL_OFFERS';
    public static EX_TRADED: string = 'EX_TRADED';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'SP_AVAILABLE' &&
                value !== 'SP_TRADED' &&
                value !== 'EX_BEST_OFFERS' &&
                value !== 'EX_ALL_OFFERS' &&
                value !== 'EX_TRADED') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
