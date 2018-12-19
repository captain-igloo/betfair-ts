/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import CancelInstructionReport from '../sport/CancelInstructionReport';
import ExecutionReportErrorCode from '../sport/enum/ExecutionReportErrorCode';
import ExecutionReportStatus from '../sport/enum/ExecutionReportStatus';
export default class CancelExecutionReport extends JsonResponse {
    private customerRef;
    private status;
    private errorCode;
    private marketId;
    private instructionReports;
    constructor(customerRef?: string, status?: ExecutionReportStatus, errorCode?: ExecutionReportErrorCode, marketId?: string, instructionReports?: CancelInstructionReport[]);
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
    getInstructionReports(): CancelInstructionReport[];
    setInstructionReports(instructionReports: CancelInstructionReport[]): void;
}
