/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class ExecutionReportErrorCode extends Enum {
    public static ERROR_IN_MATCHER: string = 'ERROR_IN_MATCHER';
    public static PROCESSED_WITH_ERRORS: string = 'PROCESSED_WITH_ERRORS';
    public static BET_ACTION_ERROR: string = 'BET_ACTION_ERROR';
    public static INVALID_ACCOUNT_STATE: string = 'INVALID_ACCOUNT_STATE';
    public static INVALID_WALLET_STATUS: string = 'INVALID_WALLET_STATUS';
    public static INSUFFICIENT_FUNDS: string = 'INSUFFICIENT_FUNDS';
    public static LOSS_LIMIT_EXCEEDED: string = 'LOSS_LIMIT_EXCEEDED';
    public static MARKET_SUSPENDED: string = 'MARKET_SUSPENDED';
    public static MARKET_NOT_OPEN_FOR_BETTING: string = 'MARKET_NOT_OPEN_FOR_BETTING';
    public static DUPLICATE_TRANSACTION: string = 'DUPLICATE_TRANSACTION';
    public static INVALID_ORDER: string = 'INVALID_ORDER';
    public static INVALID_MARKET_ID: string = 'INVALID_MARKET_ID';
    public static PERMISSION_DENIED: string = 'PERMISSION_DENIED';
    public static DUPLICATE_BETIDS: string = 'DUPLICATE_BETIDS';
    public static NO_ACTION_REQUIRED: string = 'NO_ACTION_REQUIRED';
    public static SERVICE_UNAVAILABLE: string = 'SERVICE_UNAVAILABLE';
    public static REJECTED_BY_REGULATOR: string = 'REJECTED_BY_REGULATOR';
    public static NO_CHASING: string = 'NO_CHASING';
    public static REGULATOR_IS_NOT_AVAILABLE: string = 'REGULATOR_IS_NOT_AVAILABLE';
    public static TOO_MANY_INSTRUCTIONS: string = 'TOO_MANY_INSTRUCTIONS';
    public static INVALID_MARKET_VERSION: string = 'INVALID_MARKET_VERSION';
    public static EVENT_EXPOSURE_LIMIT_EXCEEDED: string = 'EVENT_EXPOSURE_LIMIT_EXCEEDED';
    public static EVENT_MATCHED_EXPOSURE_LIMIT_EXCEEDED: string = 'EVENT_MATCHED_EXPOSURE_LIMIT_EXCEEDED';
    public static EVENT_BLOCKED: string = 'EVENT_BLOCKED';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'ERROR_IN_MATCHER' &&
                value !== 'PROCESSED_WITH_ERRORS' &&
                value !== 'BET_ACTION_ERROR' &&
                value !== 'INVALID_ACCOUNT_STATE' &&
                value !== 'INVALID_WALLET_STATUS' &&
                value !== 'INSUFFICIENT_FUNDS' &&
                value !== 'LOSS_LIMIT_EXCEEDED' &&
                value !== 'MARKET_SUSPENDED' &&
                value !== 'MARKET_NOT_OPEN_FOR_BETTING' &&
                value !== 'DUPLICATE_TRANSACTION' &&
                value !== 'INVALID_ORDER' &&
                value !== 'INVALID_MARKET_ID' &&
                value !== 'PERMISSION_DENIED' &&
                value !== 'DUPLICATE_BETIDS' &&
                value !== 'NO_ACTION_REQUIRED' &&
                value !== 'SERVICE_UNAVAILABLE' &&
                value !== 'REJECTED_BY_REGULATOR' &&
                value !== 'NO_CHASING' &&
                value !== 'REGULATOR_IS_NOT_AVAILABLE' &&
                value !== 'TOO_MANY_INSTRUCTIONS' &&
                value !== 'INVALID_MARKET_VERSION' &&
                value !== 'EVENT_EXPOSURE_LIMIT_EXCEEDED' &&
                value !== 'EVENT_MATCHED_EXPOSURE_LIMIT_EXCEEDED' &&
                value !== 'EVENT_BLOCKED') {
                throw new Error(`Invalid ExecutionReportErrorCode: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
