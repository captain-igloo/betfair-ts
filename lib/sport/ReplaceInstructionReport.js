"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const CancelInstructionReport_1 = require("../sport/CancelInstructionReport");
const InstructionReportErrorCode_1 = require("../sport/enum/InstructionReportErrorCode");
const InstructionReportStatus_1 = require("../sport/enum/InstructionReportStatus");
const PlaceInstructionReport_1 = require("../sport/PlaceInstructionReport");
class ReplaceInstructionReport extends JsonMember_1.default {
    constructor(options) {
        super();
        this.status = this.fromJson(options.status, InstructionReportStatus_1.default);
        if (options.errorCode) {
            this.errorCode = this.fromJson(options.errorCode, InstructionReportErrorCode_1.default);
        }
        this.cancelInstructionReport = options.cancelInstructionReport && this.fromJson(options.cancelInstructionReport, CancelInstructionReport_1.default);
        this.placeInstructionReport = options.placeInstructionReport && this.fromJson(options.placeInstructionReport, PlaceInstructionReport_1.default);
    }
    toJson() {
        const json = {
            status: this.status.getValue(),
        };
        if (this.errorCode) {
            json.errorCode = this.errorCode.getValue();
        }
        if (this.cancelInstructionReport) {
            json.cancelInstructionReport = this.cancelInstructionReport.toJson();
        }
        if (this.placeInstructionReport) {
            json.placeInstructionReport = this.placeInstructionReport.toJson();
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
    getCancelInstructionReport() {
        return this.cancelInstructionReport;
    }
    setCancelInstructionReport(cancelInstructionReport) {
        this.cancelInstructionReport = cancelInstructionReport;
    }
    getPlaceInstructionReport() {
        return this.placeInstructionReport;
    }
    setPlaceInstructionReport(placeInstructionReport) {
        this.placeInstructionReport = placeInstructionReport;
    }
}
exports.default = ReplaceInstructionReport;
//# sourceMappingURL=ReplaceInstructionReport.js.map