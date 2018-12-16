/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import ExecutionReportStatus from '../sport/enum/ExecutionReportStatus';
import ExecutionReportErrorCode from '../sport/enum/ExecutionReportErrorCode';
import ReplaceInstructionReport from '../sport/ReplaceInstructionReport';
export default class ReplaceExecutionReport extends JsonResponse {
    private customerRef;
    private status;
    private errorCode;
    private marketId;
    private instructionReports;
    constructor(customerRef?: string, status?: ExecutionReportStatus, errorCode?: ExecutionReportErrorCode, marketId?: string, instructionReports?: ReplaceInstructionReport[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getCustomerRef(): string;
    setCustomerRef(customerRef: string): void;
    getStatus(): ExecutionReportStatus;
    setStatus(status: ExecutionReportStatus): void;
    getErrorCode(): ExecutionReportErrorCode;
    setErrorCode(errorCode: ExecutionReportErrorCode): void;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getInstructionReports(): ReplaceInstructionReport[];
    setInstructionReports(instructionReports: ReplaceInstructionReport[]): void;
}
