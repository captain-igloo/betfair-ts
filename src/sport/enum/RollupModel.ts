/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class RollupModel extends Enum {
    public static STAKE: string = 'STAKE';
    public static PAYOUT: string = 'PAYOUT';
    public static MANAGED_LIABILITY: string = 'MANAGED_LIABILITY';
    public static NONE: string = 'NONE';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'STAKE' &&
                value !== 'PAYOUT' &&
                value !== 'MANAGED_LIABILITY' &&
                value !== 'NONE') {
                throw new Error(`Invalid RollupModel: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
