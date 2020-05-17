/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class MatchProjection extends Enum {
    public static NO_ROLLUP: string = 'NO_ROLLUP';
    public static ROLLED_UP_BY_PRICE: string = 'ROLLED_UP_BY_PRICE';
    public static ROLLED_UP_BY_AVG_PRICE: string = 'ROLLED_UP_BY_AVG_PRICE';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'NO_ROLLUP' &&
                value !== 'ROLLED_UP_BY_PRICE' &&
                value !== 'ROLLED_UP_BY_AVG_PRICE') {
                throw new Error(`Invalid MatchProjection: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
