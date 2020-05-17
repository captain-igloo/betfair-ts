/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class OrderStatus extends Enum {
    public static PENDING: string = 'PENDING';
    public static EXECUTION_COMPLETE: string = 'EXECUTION_COMPLETE';
    public static EXECUTABLE: string = 'EXECUTABLE';
    public static EXPIRED: string = 'EXPIRED';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'PENDING' &&
                value !== 'EXECUTION_COMPLETE' &&
                value !== 'EXECUTABLE' &&
                value !== 'EXPIRED') {
                throw new Error(`Invalid OrderStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
