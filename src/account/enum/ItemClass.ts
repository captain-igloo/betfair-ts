/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class ItemClass extends Enum {
    public static UNKNOWN: string = 'UNKNOWN';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'UNKNOWN') {
                throw new Error(`Invalid ItemClass: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
