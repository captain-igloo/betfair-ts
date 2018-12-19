/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class BetTargetType extends Enum {
    public static PAYOUT: string = 'PAYOUT';
    public static BACKERS_PROFIT: string = 'BACKERS_PROFIT';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'PAYOUT' &&
                value !== 'BACKERS_PROFIT') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
