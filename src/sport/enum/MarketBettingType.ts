/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class MarketBettingType extends Enum {
    public static ODDS: string = 'ODDS';
    public static LINE: string = 'LINE';
    public static RANGE: string = 'RANGE';
    public static ASIAN_HANDICAP_DOUBLE_LINE: string = 'ASIAN_HANDICAP_DOUBLE_LINE';
    public static ASIAN_HANDICAP_SINGLE_LINE: string = 'ASIAN_HANDICAP_SINGLE_LINE';
    public static FIXED_ODDS: string = 'FIXED_ODDS';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'ODDS' &&
                value !== 'LINE' &&
                value !== 'RANGE' &&
                value !== 'ASIAN_HANDICAP_DOUBLE_LINE' &&
                value !== 'ASIAN_HANDICAP_SINGLE_LINE' &&
                value !== 'FIXED_ODDS') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
