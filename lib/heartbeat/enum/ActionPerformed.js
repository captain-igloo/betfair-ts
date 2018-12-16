"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class ActionPerformed extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'NONE' && value !== 'CANCELLATION_REQUEST_SUBMITTED' && value !== 'ALL_BETS_CANCELLED' && value !== 'SOME_BETS_NOT_CANCELLED' && value !== 'CANCELLATION_REQUEST_ERROR' && value !== 'CANCELLATION_STATUS_UNKNOWN') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
ActionPerformed.NONE = 'NONE';
ActionPerformed.CANCELLATION_REQUEST_SUBMITTED = 'CANCELLATION_REQUEST_SUBMITTED';
ActionPerformed.ALL_BETS_CANCELLED = 'ALL_BETS_CANCELLED';
ActionPerformed.SOME_BETS_NOT_CANCELLED = 'SOME_BETS_NOT_CANCELLED';
ActionPerformed.CANCELLATION_REQUEST_ERROR = 'CANCELLATION_REQUEST_ERROR';
ActionPerformed.CANCELLATION_STATUS_UNKNOWN = 'CANCELLATION_STATUS_UNKNOWN';
exports.default = ActionPerformed;
