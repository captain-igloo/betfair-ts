/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class InstructionReportStatus extends Enum {
    public static SUCCESS: string = 'SUCCESS';
    public static FAILURE: string = 'FAILURE';
    public static TIMEOUT: string = 'TIMEOUT';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'SUCCESS' && value !== 'FAILURE' && value !== 'TIMEOUT') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
