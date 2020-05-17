"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const InstructionReportErrorCode_1 = require("../sport/enum/InstructionReportErrorCode");
const InstructionReportStatus_1 = require("../sport/enum/InstructionReportStatus");
const UpdateInstruction_1 = require("../sport/UpdateInstruction");
class UpdateInstructionReport extends JsonMember_1.default {
    constructor(options) {
        super();
        this.status = this.fromJson(options.status, InstructionReportStatus_1.default);
        if (options.errorCode) {
            this.errorCode = this.fromJson(options.errorCode, InstructionReportErrorCode_1.default);
        }
        this.instruction = this.fromJson(options.instruction, UpdateInstruction_1.default);
    }
    toJson() {
        const json = {
            status: this.status.getValue(),
            instruction: this.instruction.toJson(),
        };
        if (this.errorCode) {
            json.errorCode = this.errorCode.getValue();
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
}
exports.default = UpdateInstructionReport;
//# sourceMappingURL=UpdateInstructionReport.js.map