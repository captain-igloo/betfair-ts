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
                throw new Error(`Invalid ExecutionReportStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
exports.default = ExecutionReportStatus;
ExecutionReportStatus.SUCCESS = 'SUCCESS';
ExecutionReportStatus.FAILURE = 'FAILURE';
ExecutionReportStatus.PROCESSED_WITH_ERRORS = 'PROCESSED_WITH_ERRORS';
ExecutionReportStatus.TIMEOUT = 'TIMEOUT';
//# sourceMappingURL=ExecutionReportStatus.js.map