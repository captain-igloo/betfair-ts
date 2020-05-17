/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class SubscriptionStatus extends Enum {
    public static ALL: string = 'ALL';
    public static ACTIVATED: string = 'ACTIVATED';
    public static UNACTIVATED: string = 'UNACTIVATED';
    public static CANCELLED: string = 'CANCELLED';
    public static EXPIRED: string = 'EXPIRED';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'ALL' &&
                value !== 'ACTIVATED' &&
                value !== 'UNACTIVATED' &&
                value !== 'CANCELLED' &&
                value !== 'EXPIRED') {
                throw new Error(`Invalid SubscriptionStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
