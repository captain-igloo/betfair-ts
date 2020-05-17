/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import ExecutionReportErrorCode from '../sport/enum/ExecutionReportErrorCode';
import ExecutionReportStatus from '../sport/enum/ExecutionReportStatus';
import ReplaceInstructionReport, { IReplaceInstructionReportOptions } from '../sport/ReplaceInstructionReport';

export interface IReplaceExecutionReportOptions {
    customerRef?: string;
    status?: ExecutionReportStatus | string;
    errorCode?: ExecutionReportErrorCode | string;
    marketId?: string;
    instructionReports?: Array<ReplaceInstructionReport | IReplaceInstructionReportOptions>;
}

export default class ReplaceExecutionReport extends JsonResponse {
    private customerRef?: string;
    private status?: ExecutionReportStatus;
    private errorCode?: ExecutionReportErrorCode;
    private marketId?: string;
    private instructionReports?: ReplaceInstructionReport[];

    constructor(options: IReplaceExecutionReportOptions) {
        super();
        if (this.validateJson(options)) {
            this.customerRef = options.customerRef;
            if (options.status) {
                this.status = this.fromJson(options.status, ExecutionReportStatus);
            }
            if (options.errorCode) {
                this.errorCode = this.fromJson(options.errorCode, ExecutionReportErrorCode);
            }
            this.marketId = options.marketId;
            if (options.instructionReports) {
                this.instructionReports = this.arrayFromJson(options.instructionReports, ReplaceInstructionReport);
            }
        }
    }

    public toJson(): IReplaceExecutionReportOptions {
        const json: IReplaceExecutionReportOptions = {
        };
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

    public getCustomerRef(): string | undefined {
        return this.customerRef;
    }
    public setCustomerRef(customerRef: string): void {
        this.customerRef = customerRef;
    }
    public getStatus(): ExecutionReportStatus | undefined {
        return this.status;
    }
    public setStatus(status: ExecutionReportStatus): void {
        this.status = status;
    }
    public getErrorCode(): ExecutionReportErrorCode | undefined {
        return this.errorCode;
    }
    public setErrorCode(errorCode: ExecutionReportErrorCode): void {
        this.errorCode = errorCode;
    }
    public getMarketId(): string | undefined {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getInstructionReports(): ReplaceInstructionReport[] | undefined {
        return this.instructionReports;
    }
    public setInstructionReports(instructionReports: ReplaceInstructionReport[]): void {
        this.instructionReports = instructionReports;
    }

}
