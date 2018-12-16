/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class ExecutionReportStatus extends Enum {
    public static SUCCESS: string = 'SUCCESS';
    public static FAILURE: string = 'FAILURE';
    public static PROCESSED_WITH_ERRORS: string = 'PROCESSED_WITH_ERRORS';
    public static TIMEOUT: string = 'TIMEOUT';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'SUCCESS' && value !== 'FAILURE' && value !== 'PROCESSED_WITH_ERRORS' && value !== 'TIMEOUT') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
