/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class IncludeItem extends Enum {
    public static ALL: string = 'ALL';
    public static EXCHANGE: string = 'EXCHANGE';
    public static POKER_ROOM: string = 'POKER_ROOM';
    public static DEPOSITS_WITHDRAWALS: string = 'DEPOSITS_WITHDRAWALS';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'ALL' && value !== 'EXCHANGE' && value !== 'POKER_ROOM' && value !== 'DEPOSITS_WITHDRAWALS') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
