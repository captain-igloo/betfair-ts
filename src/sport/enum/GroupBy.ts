/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class GroupBy extends Enum {
    public static EVENT_TYPE: string = 'EVENT_TYPE';
    public static EVENT: string = 'EVENT';
    public static MARKET: string = 'MARKET';
    public static RUNNER: string = 'RUNNER';
    public static SIDE: string = 'SIDE';
    public static BET: string = 'BET';
    public static STRATEGY: string = 'STRATEGY';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'EVENT_TYPE' &&
                value !== 'EVENT' &&
                value !== 'MARKET' &&
                value !== 'RUNNER' &&
                value !== 'SIDE' &&
                value !== 'BET' &&
                value !== 'STRATEGY') {
                throw new Error(`Invalid GroupBy: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
