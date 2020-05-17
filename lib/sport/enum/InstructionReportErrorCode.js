"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class InstructionReportErrorCode extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'INVALID_BET_SIZE' &&
                value !== 'INVALID_RUNNER' &&
                value !== 'BET_TAKEN_OR_LAPSED' &&
                value !== 'BET_IN_PROGRESS' &&
                value !== 'RUNNER_REMOVED' &&
                value !== 'MARKET_NOT_OPEN_FOR_BETTING' &&
                value !== 'LOSS_LIMIT_EXCEEDED' &&
                value !== 'MARKET_NOT_OPEN_FOR_BSP_BETTING' &&
                value !== 'INVALID_PRICE_EDIT' &&
                value !== 'INVALID_ODDS' &&
                value !== 'INSUFFICIENT_FUNDS' &&
                value !== 'INVALID_PERSISTENCE_TYPE' &&
                value !== 'ERROR_IN_MATCHER' &&
                value !== 'INVALID_BACK_LAY_COMBINATION' &&
                value !== 'ERROR_IN_ORDER' &&
                value !== 'INVALID_BID_TYPE' &&
                value !== 'INVALID_BET_ID' &&
                value !== 'CANCELLED_NOT_PLACED' &&
                value !== 'RELATED_ACTION_FAILED' &&
                value !== 'NO_ACTION_REQUIRED' &&
                value !== 'INVALID_MIN_FILL_SIZE' &&
                value !== 'INVALID_CUSTOMER_ORDER_REF' &&
                value !== 'TIME_IN_FORCE_CONFLICT' &&
                value !== 'UNEXPECTED_PERSISTENCE_TYPE' &&
                value !== 'INVALID_ORDER_TYPE' &&
                value !== 'UNEXPECTED_MIN_FILL_SIZE' &&
                value !== 'INVALID_CUSTOMER_STRATEGY_REF' &&
                value !== 'BET_LAPSED_PRICE_IMPROVEMENT_TOO_LARGE') {
                throw new Error(`Invalid InstructionReportErrorCode: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
exports.default = InstructionReportErrorCode;
InstructionReportErrorCode.INVALID_BET_SIZE = 'INVALID_BET_SIZE';
InstructionReportErrorCode.INVALID_RUNNER = 'INVALID_RUNNER';
InstructionReportErrorCode.BET_TAKEN_OR_LAPSED = 'BET_TAKEN_OR_LAPSED';
InstructionReportErrorCode.BET_IN_PROGRESS = 'BET_IN_PROGRESS';
InstructionReportErrorCode.RUNNER_REMOVED = 'RUNNER_REMOVED';
InstructionReportErrorCode.MARKET_NOT_OPEN_FOR_BETTING = 'MARKET_NOT_OPEN_FOR_BETTING';
InstructionReportErrorCode.LOSS_LIMIT_EXCEEDED = 'LOSS_LIMIT_EXCEEDED';
InstructionReportErrorCode.MARKET_NOT_OPEN_FOR_BSP_BETTING = 'MARKET_NOT_OPEN_FOR_BSP_BETTING';
InstructionReportErrorCode.INVALID_PRICE_EDIT = 'INVALID_PRICE_EDIT';
InstructionReportErrorCode.INVALID_ODDS = 'INVALID_ODDS';
InstructionReportErrorCode.INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS';
InstructionReportErrorCode.INVALID_PERSISTENCE_TYPE = 'INVALID_PERSISTENCE_TYPE';
InstructionReportErrorCode.ERROR_IN_MATCHER = 'ERROR_IN_MATCHER';
InstructionReportErrorCode.INVALID_BACK_LAY_COMBINATION = 'INVALID_BACK_LAY_COMBINATION';
InstructionReportErrorCode.ERROR_IN_ORDER = 'ERROR_IN_ORDER';
InstructionReportErrorCode.INVALID_BID_TYPE = 'INVALID_BID_TYPE';
InstructionReportErrorCode.INVALID_BET_ID = 'INVALID_BET_ID';
InstructionReportErrorCode.CANCELLED_NOT_PLACED = 'CANCELLED_NOT_PLACED';
InstructionReportErrorCode.RELATED_ACTION_FAILED = 'RELATED_ACTION_FAILED';
InstructionReportErrorCode.NO_ACTION_REQUIRED = 'NO_ACTION_REQUIRED';
InstructionReportErrorCode.INVALID_MIN_FILL_SIZE = 'INVALID_MIN_FILL_SIZE';
InstructionReportErrorCode.INVALID_CUSTOMER_ORDER_REF = 'INVALID_CUSTOMER_ORDER_REF';
InstructionReportErrorCode.TIME_IN_FORCE_CONFLICT = 'TIME_IN_FORCE_CONFLICT';
InstructionReportErrorCode.UNEXPECTED_PERSISTENCE_TYPE = 'UNEXPECTED_PERSISTENCE_TYPE';
InstructionReportErrorCode.INVALID_ORDER_TYPE = 'INVALID_ORDER_TYPE';
InstructionReportErrorCode.UNEXPECTED_MIN_FILL_SIZE = 'UNEXPECTED_MIN_FILL_SIZE';
InstructionReportErrorCode.INVALID_CUSTOMER_STRATEGY_REF = 'INVALID_CUSTOMER_STRATEGY_REF';
InstructionReportErrorCode.BET_LAPSED_PRICE_IMPROVEMENT_TOO_LARGE = 'BET_LAPSED_PRICE_IMPROVEMENT_TOO_LARGE';
//# sourceMappingURL=InstructionReportErrorCode.js.map