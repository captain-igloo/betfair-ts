"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class ExecutionReportErrorCode extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
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
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
ExecutionReportErrorCode.ERROR_IN_MATCHER = 'ERROR_IN_MATCHER';
ExecutionReportErrorCode.PROCESSED_WITH_ERRORS = 'PROCESSED_WITH_ERRORS';
ExecutionReportErrorCode.BET_ACTION_ERROR = 'BET_ACTION_ERROR';
ExecutionReportErrorCode.INVALID_ACCOUNT_STATE = 'INVALID_ACCOUNT_STATE';
ExecutionReportErrorCode.INVALID_WALLET_STATUS = 'INVALID_WALLET_STATUS';
ExecutionReportErrorCode.INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS';
ExecutionReportErrorCode.LOSS_LIMIT_EXCEEDED = 'LOSS_LIMIT_EXCEEDED';
ExecutionReportErrorCode.MARKET_SUSPENDED = 'MARKET_SUSPENDED';
ExecutionReportErrorCode.MARKET_NOT_OPEN_FOR_BETTING = 'MARKET_NOT_OPEN_FOR_BETTING';
ExecutionReportErrorCode.DUPLICATE_TRANSACTION = 'DUPLICATE_TRANSACTION';
ExecutionReportErrorCode.INVALID_ORDER = 'INVALID_ORDER';
ExecutionReportErrorCode.INVALID_MARKET_ID = 'INVALID_MARKET_ID';
ExecutionReportErrorCode.PERMISSION_DENIED = 'PERMISSION_DENIED';
ExecutionReportErrorCode.DUPLICATE_BETIDS = 'DUPLICATE_BETIDS';
ExecutionReportErrorCode.NO_ACTION_REQUIRED = 'NO_ACTION_REQUIRED';
ExecutionReportErrorCode.SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE';
ExecutionReportErrorCode.REJECTED_BY_REGULATOR = 'REJECTED_BY_REGULATOR';
ExecutionReportErrorCode.NO_CHASING = 'NO_CHASING';
ExecutionReportErrorCode.REGULATOR_IS_NOT_AVAILABLE = 'REGULATOR_IS_NOT_AVAILABLE';
ExecutionReportErrorCode.TOO_MANY_INSTRUCTIONS = 'TOO_MANY_INSTRUCTIONS';
ExecutionReportErrorCode.INVALID_MARKET_VERSION = 'INVALID_MARKET_VERSION';
ExecutionReportErrorCode.EVENT_EXPOSURE_LIMIT_EXCEEDED = 'EVENT_EXPOSURE_LIMIT_EXCEEDED';
ExecutionReportErrorCode.EVENT_MATCHED_EXPOSURE_LIMIT_EXCEEDED = 'EVENT_MATCHED_EXPOSURE_LIMIT_EXCEEDED';
ExecutionReportErrorCode.EVENT_BLOCKED = 'EVENT_BLOCKED';
exports.default = ExecutionReportErrorCode;
//# sourceMappingURL=ExecutionReportErrorCode.js.map