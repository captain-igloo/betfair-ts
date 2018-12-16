"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const InstructionReportStatus_1 = require("../sport/enum/InstructionReportStatus");
const InstructionReportErrorCode_1 = require("../sport/enum/InstructionReportErrorCode");
const UpdateInstruction_1 = require("../sport/UpdateInstruction");
class UpdateInstructionReport extends JsonMember_1.default {
    constructor(status = new InstructionReportStatus_1.default(), errorCode = new InstructionReportErrorCode_1.default(), instruction = new UpdateInstruction_1.default()) {
        super();
        this.status = status;
        this.errorCode = errorCode;
        this.instruction = instruction;
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
        return json;
    }
    isValid() {
        return this.status.isValid() &&
            this.instruction.isValid();
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
}
exports.default = UpdateInstructionReport;
