"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const ExecutionReportErrorCode_1 = require("../sport/enum/ExecutionReportErrorCode");
const ExecutionReportStatus_1 = require("../sport/enum/ExecutionReportStatus");
const PlaceInstructionReport_1 = require("../sport/PlaceInstructionReport");
class PlaceExecutionReport extends JsonResponse_1.default {
    constructor(customerRef = '', status = new ExecutionReportStatus_1.default(), errorCode = new ExecutionReportErrorCode_1.default(), marketId = '', instructionReports = []) {
        super();
        this.customerRef = customerRef;
        this.status = status;
        this.errorCode = errorCode;
        this.marketId = marketId;
        this.instructionReports = instructionReports;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            if ('customerRef' in json) {
                this.customerRef = json.customerRef;
            }
            if ('status' in json) {
                this.status.setValue(json.status);
            }
            if ('errorCode' in json) {
                this.errorCode.setValue(json.errorCode);
            }
            if ('marketId' in json) {
                this.marketId = json.marketId;
            }
            if ('instructionReports' in json) {
                this.instructionReports = json.instructionReports.map((instructionReportsJson) => {
                    const element = new PlaceInstructionReport_1.default();
                    element.fromJson(instructionReportsJson);
                    return element;
                });
            }
        }
    }
    toJson() {
        const json = {};
        if (this.customerRef !== null) {
            json.customerRef = this.customerRef;
        }
        if (this.status.isValid()) {
            json.status = this.status;
        }
        if (this.errorCode.isValid()) {
            json.errorCode = this.errorCode;
        }
        if (this.marketId !== null) {
            json.marketId = this.marketId;
        }
        if (this.instructionReports.length > 0) {
            json.instructionReports = this.instructionReports.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.status.isValid();
    }
    getCustomerRef() {
        return this.customerRef;
    }
    setCustomerRef(customerRef) {
        this.customerRef = customerRef;
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
    getMarketId() {
        return this.marketId;
    }
    setMarketId(marketId) {
        this.marketId = marketId;
    }
    getInstructionReports() {
        return this.instructionReports;
    }
    setInstructionReports(instructionReports) {
        this.instructionReports = instructionReports;
    }
}
exports.default = PlaceExecutionReport;
