"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const CancelInstruction_1 = require("../sport/CancelInstruction");
const InstructionReportErrorCode_1 = require("../sport/enum/InstructionReportErrorCode");
const InstructionReportStatus_1 = require("../sport/enum/InstructionReportStatus");
class CancelInstructionReport extends JsonMember_1.default {
    constructor(status = new InstructionReportStatus_1.default(), errorCode = new InstructionReportErrorCode_1.default(), instruction = new CancelInstruction_1.default(), sizeCancelled = null, cancelledDate = null) {
        super();
        this.status = status;
        this.errorCode = errorCode;
        this.instruction = instruction;
        this.sizeCancelled = sizeCancelled;
        this.cancelledDate = cancelledDate;
    }
    fromJson(json) {
        if ('status' in json) {
            this.status.setValue(json.status);
        }
        if ('errorCode' in json) {
            this.errorCode.setValue(json.errorCode);
        }
        if ('instruction' in json) {
            this.instruction.fromJson(json.instruction);
        }
        if ('sizeCancelled' in json) {
            this.sizeCancelled = json.sizeCancelled;
        }
        if ('cancelledDate' in json) {
            this.cancelledDate = new Date(json.cancelledDate);
        }
    }
    toJson() {
        const json = {};
        if (this.status.isValid()) {
            json.status = this.status;
        }
        if (this.errorCode.isValid()) {
            json.errorCode = this.errorCode;
        }
        if (this.instruction.isValid()) {
            json.instruction = this.instruction.toJson();
        }
        if (this.sizeCancelled !== null) {
            json.sizeCancelled = this.sizeCancelled;
        }
        if (this.cancelledDate !== null) {
            json.cancelledDate = this.cancelledDate.toISOString();
        }
        return json;
    }
    isValid() {
        return this.status.isValid() &&
            this.sizeCancelled !== null &&
            this.cancelledDate !== null;
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