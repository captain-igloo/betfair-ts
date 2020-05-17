/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class MarketGroupType extends Enum {
    public static EVENT: string = 'EVENT';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'EVENT') {
                throw new Error(`Invalid MarketGroupType: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
