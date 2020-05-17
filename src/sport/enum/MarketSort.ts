/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class MarketSort extends Enum {
    public static MINIMUM_TRADED: string = 'MINIMUM_TRADED';
    public static MAXIMUM_TRADED: string = 'MAXIMUM_TRADED';
    public static MINIMUM_AVAILABLE: string = 'MINIMUM_AVAILABLE';
    public static MAXIMUM_AVAILABLE: string = 'MAXIMUM_AVAILABLE';
    public static FIRST_TO_START: string = 'FIRST_TO_START';
    public static LAST_TO_START: string = 'LAST_TO_START';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'MINIMUM_TRADED' &&
                value !== 'MAXIMUM_TRADED' &&
                value !== 'MINIMUM_AVAILABLE' &&
                value !== 'MAXIMUM_AVAILABLE' &&
                value !== 'FIRST_TO_START' &&
                value !== 'LAST_TO_START') {
                throw new Error(`Invalid MarketSort: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
