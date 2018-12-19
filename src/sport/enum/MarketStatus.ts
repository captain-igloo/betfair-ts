/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class MarketStatus extends Enum {
    public static INACTIVE: string = 'INACTIVE';
    public static OPEN: string = 'OPEN';
    public static SUSPENDED: string = 'SUSPENDED';
    public static CLOSED: string = 'CLOSED';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'INACTIVE' &&
                value !== 'OPEN' &&
                value !== 'SUSPENDED' &&
                value !== 'CLOSED') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
