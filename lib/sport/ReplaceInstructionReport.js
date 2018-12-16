"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const InstructionReportStatus_1 = require("../sport/enum/InstructionReportStatus");
const InstructionReportErrorCode_1 = require("../sport/enum/InstructionReportErrorCode");
const CancelInstructionReport_1 = require("../sport/CancelInstructionReport");
const PlaceInstructionReport_1 = require("../sport/PlaceInstructionReport");
class ReplaceInstructionReport extends JsonMember_1.default {
    constructor(status = new InstructionReportStatus_1.default(), errorCode = new InstructionReportErrorCode_1.default(), cancelInstructionReport = new CancelInstructionReport_1.default(), placeInstructionReport = new PlaceInstructionReport_1.default()) {
        super();
        this.status = status;
        this.errorCode = errorCode;
        this.cancelInstructionReport = cancelInstructionReport;
        this.placeInstructionReport = placeInstructionReport;
    }
    fromJson(json) {
        if ('status' in json) {
            this.status.setValue(json.status);
        }
        if ('errorCode' in json) {
            this.errorCode.setValue(json.errorCode);
        }
        if ('cancelInstructionReport' in json) {
            this.cancelInstructionReport.fromJson(json.cancelInstructionReport);
        }
        if ('placeInstructionReport' in json) {
            this.placeInstructionReport.fromJson(json.placeInstructionReport);
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
        if (this.cancelInstructionReport.isValid()) {
            json.cancelInstructionReport = this.cancelInstructionReport.toJson();
        }
        if (this.placeInstructionReport.isValid()) {
            json.placeInstructionReport = this.placeInstructionReport.toJson();
        }
        return json;
    }
    isValid() {
        return this.status.isValid();
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
