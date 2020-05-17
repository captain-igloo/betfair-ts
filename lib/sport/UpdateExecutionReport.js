"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const ExecutionReportErrorCode_1 = require("../sport/enum/ExecutionReportErrorCode");
const ExecutionReportStatus_1 = require("../sport/enum/ExecutionReportStatus");
const UpdateInstructionReport_1 = require("../sport/UpdateInstructionReport");
class UpdateExecutionReport extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            this.customerRef = options.customerRef;
            if (options.status) {
                this.status = this.fromJson(options.status, ExecutionReportStatus_1.default);
            }
            if (options.errorCode) {
                this.errorCode = this.fromJson(options.errorCode, ExecutionReportErrorCode_1.default);
            }
            this.marketId = options.marketId;
            if (options.instructionReports) {
                this.instructionReports = this.arrayFromJson(options.instructionReports, UpdateInstructionReport_1.default);
            }
        }
    }
    toJson() {
        const json = {};
        if (typeof this.customerRef !== 'undefined') {
            json.customerRef = this.customerRef;
        }
        if (this.status) {
            json.status = this.status.getValue();
        }
        if (this.errorCode) {
            json.errorCode = this.errorCode.getValue();
        }
        if (typeof this.marketId !== 'undefined') {
            json.marketId = this.marketId;
        }
        if (this.instructionReports && this.instructionReports.length > 0) {
            json.instructionReports = this.instructionReports.map((value) => value.toJson());
        }
        return json;
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
exports.default = UpdateExecutionReport;
//# sourceMappingURL=UpdateExecutionReport.js.map