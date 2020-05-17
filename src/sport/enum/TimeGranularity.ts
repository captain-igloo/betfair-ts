/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class TimeGranularity extends Enum {
    public static DAYS: string = 'DAYS';
    public static HOURS: string = 'HOURS';
    public static MINUTES: string = 'MINUTES';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'DAYS' &&
                value !== 'HOURS' &&
                value !== 'MINUTES') {
                throw new Error(`Invalid TimeGranularity: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
