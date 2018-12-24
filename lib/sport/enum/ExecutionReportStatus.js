"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class ExecutionReportStatus extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'SUCCESS' &&
                value !== 'FAILURE' &&
                value !== 'PROCESSED_WITH_ERRORS' &&
                value !== 'TIMEOUT') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
ExecutionReportStatus.SUCCESS = 'SUCCESS';
ExecutionReportStatus.FAILURE = 'FAILURE';
ExecutionReportStatus.PROCESSED_WITH_ERRORS = 'PROCESSED_WITH_ERRORS';
ExecutionReportStatus.TIMEOUT = 'TIMEOUT';
exports.default = ExecutionReportStatus;
//# sourceMappingURL=ExecutionReportStatus.js.map