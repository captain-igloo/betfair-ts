"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const CancelInstruction_1 = require("../sport/CancelInstruction");
const InstructionReportErrorCode_1 = require("../sport/enum/InstructionReportErrorCode");
const InstructionReportStatus_1 = require("../sport/enum/InstructionReportStatus");
class CancelInstructionReport extends JsonMember_1.default {
    constructor(options) {
        super();
        this.status = this.fromJson(options.status, InstructionReportStatus_1.default);
        if (options.errorCode) {
            this.errorCode = this.fromJson(options.errorCode, InstructionReportErrorCode_1.default);
        }
        this.instruction = options.instruction && this.fromJson(options.instruction, CancelInstruction_1.default);
        this.sizeCancelled = options.sizeCancelled;
        this.cancelledDate = this.fromJson(options.cancelledDate, Date);
    }
    toJson() {
        const json = {
            status: this.status.getValue(),
            sizeCancelled: this.sizeCancelled,
            cancelledDate: this.cancelledDate.toISOString(),
        };
        if (this.errorCode) {
            json.errorCode = this.errorCode.getValue();
        }
        if (this.instruction) {
            json.instruction = this.instruction.toJson();
        }
        return json;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getErrorCode() {
        return this.errorCode;
    }
    setErrorCode(errorCode) {
        this.errorCode = errorCode;
    }
    getInstruction() {
        return this.instruction;
    }
    setInstruction(instruction) {
        this.instruction = instruction;
    }
    getSizeCancelled() {
        return this.sizeCancelled;
    }
    setSizeCancelled(sizeCancelled) {
        this.sizeCancelled = sizeCancelled;
    }
    getCancelledDate() {
        return this.cancelledDate;
    }
    setCancelledDate(cancelledDate) {
        this.cancelledDate = cancelledDate;
    }
}
exports.default = CancelInstructionReport;
//# sourceMappingURL=CancelInstructionReport.js.map