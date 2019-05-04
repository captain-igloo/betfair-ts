/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class ExecutionReportErrorCode extends Enum {
    static ERROR_IN_MATCHER: string;
    static PROCESSED_WITH_ERRORS: string;
    static BET_ACTION_ERROR: string;
    static INVALID_ACCOUNT_STATE: string;
    static INVALID_WALLET_STATUS: string;
    static INSUFFICIENT_FUNDS: string;
    static LOSS_LIMIT_EXCEEDED: string;
    static MARKET_SUSPENDED: string;
    static MARKET_NOT_OPEN_FOR_BETTING: string;
    static DUPLICATE_TRANSACTION: string;
    static INVALID_ORDER: string;
    static INVALID_MARKET_ID: string;
    static PERMISSION_DENIED: string;
    static DUPLICATE_BETIDS: string;
    static NO_ACTION_REQUIRED: string;
    static SERVICE_UNAVAILABLE: string;
    static REJECTED_BY_REGULATOR: string;
    static NO_CHASING: string;
    static REGULATOR_IS_NOT_AVAILABLE: string;
    static TOO_MANY_INSTRUCTIONS: string;
    static INVALID_MARKET_VERSION: string;
    static EVENT_EXPOSURE_LIMIT_EXCEEDED: string;
    static EVENT_MATCHED_EXPOSURE_LIMIT_EXCEEDED: string;
    static EVENT_BLOCKED: string;
    constructor(value?: string);
    setValue(value: string): void;
}
