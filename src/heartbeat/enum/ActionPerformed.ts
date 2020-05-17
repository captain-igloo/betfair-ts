/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class ActionPerformed extends Enum {
    public static NONE: string = 'NONE';
    public static CANCELLATION_REQUEST_SUBMITTED: string = 'CANCELLATION_REQUEST_SUBMITTED';
    public static ALL_BETS_CANCELLED: string = 'ALL_BETS_CANCELLED';
    public static SOME_BETS_NOT_CANCELLED: string = 'SOME_BETS_NOT_CANCELLED';
    public static CANCELLATION_REQUEST_ERROR: string = 'CANCELLATION_REQUEST_ERROR';
    public static CANCELLATION_STATUS_UNKNOWN: string = 'CANCELLATION_STATUS_UNKNOWN';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'NONE' &&
                value !== 'CANCELLATION_REQUEST_SUBMITTED' &&
                value !== 'ALL_BETS_CANCELLED' &&
                value !== 'SOME_BETS_NOT_CANCELLED' &&
                value !== 'CANCELLATION_REQUEST_ERROR' &&
                value !== 'CANCELLATION_STATUS_UNKNOWN') {
                throw new Error(`Invalid ActionPerformed: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
