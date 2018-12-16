/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class OrderProjection extends Enum {
    public static ALL: string = 'ALL';
    public static EXECUTABLE: string = 'EXECUTABLE';
    public static EXECUTION_COMPLETE: string = 'EXECUTION_COMPLETE';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'ALL' && value !== 'EXECUTABLE' && value !== 'EXECUTION_COMPLETE') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
