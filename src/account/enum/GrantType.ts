/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class GrantType extends Enum {
    public static AUTHORIZATION_CODE: string = 'AUTHORIZATION_CODE';
    public static REFRESH_TOKEN: string = 'REFRESH_TOKEN';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'AUTHORIZATION_CODE' &&
                value !== 'REFRESH_TOKEN') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
