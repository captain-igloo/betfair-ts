/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class OrderBy extends Enum {
    public static BY_BET: string = 'BY_BET';
    public static BY_MARKET: string = 'BY_MARKET';
    public static BY_PLACE_TIME: string = 'BY_PLACE_TIME';
    public static BY_MATCH_TIME: string = 'BY_MATCH_TIME';
    public static BY_VOID_TIME: string = 'BY_VOID_TIME';
    public static BY_SETTLED_TIME: string = 'BY_SETTLED_TIME';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'BY_BET' &&
                value !== 'BY_MARKET' &&
                value !== 'BY_PLACE_TIME' &&
                value !== 'BY_MATCH_TIME' &&
                value !== 'BY_VOID_TIME' &&
                value !== 'BY_SETTLED_TIME') {
                throw new Error(`Invalid OrderBy: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
