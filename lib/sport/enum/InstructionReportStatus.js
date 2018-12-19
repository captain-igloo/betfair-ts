"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class InstructionReportStatus extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'SUCCESS' &&
                value !== 'FAILURE' &&
                value !== 'TIMEOUT') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
InstructionReportStatus.SUCCESS = 'SUCCESS';
InstructionReportStatus.FAILURE = 'FAILURE';
InstructionReportStatus.TIMEOUT = 'TIMEOUT';
exports.default = InstructionReportStatus;
