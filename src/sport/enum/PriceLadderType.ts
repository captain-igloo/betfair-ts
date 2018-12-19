/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class PriceLadderType extends Enum {
    public static CLASSIC: string = 'CLASSIC';
    public static FINEST: string = 'FINEST';
    public static LINE_RANGE: string = 'LINE_RANGE';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'CLASSIC' &&
                value !== 'FINEST' &&
                value !== 'LINE_RANGE') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
