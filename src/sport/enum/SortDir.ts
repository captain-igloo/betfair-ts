/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class SortDir extends Enum {
    public static EARLIEST_TO_LATEST: string = 'EARLIEST_TO_LATEST';
    public static LATEST_TO_EARLIEST: string = 'LATEST_TO_EARLIEST';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'EARLIEST_TO_LATEST' &&
                value !== 'LATEST_TO_EARLIEST') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
