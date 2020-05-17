/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class AffiliateRelationStatus extends Enum {
    public static INVALID_USER: string = 'INVALID_USER';
    public static AFFILIATED: string = 'AFFILIATED';
    public static NOT_AFFILIATED: string = 'NOT_AFFILIATED';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'INVALID_USER' &&
                value !== 'AFFILIATED' &&
                value !== 'NOT_AFFILIATED') {
                throw new Error(`Invalid AffiliateRelationStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
