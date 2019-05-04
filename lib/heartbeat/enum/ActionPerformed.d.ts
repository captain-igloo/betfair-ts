/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class ActionPerformed extends Enum {
    static NONE: string;
    static CANCELLATION_REQUEST_SUBMITTED: string;
    static ALL_BETS_CANCELLED: string;
    static SOME_BETS_NOT_CANCELLED: string;
    static CANCELLATION_REQUEST_ERROR: string;
    static CANCELLATION_STATUS_UNKNOWN: string;
    constructor(value?: string);
    setValue(value: string): void;
}
