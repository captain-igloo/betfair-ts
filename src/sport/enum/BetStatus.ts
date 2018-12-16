/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class BetStatus extends Enum {
    public static SETTLED: string = 'SETTLED';
    public static VOIDED: string = 'VOIDED';
    public static LAPSED: string = 'LAPSED';
    public static CANCELLED: string = 'CANCELLED';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'SETTLED' && value !== 'VOIDED' && value !== 'LAPSED' && value !== 'CANCELLED') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
