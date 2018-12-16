/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import ExecutionReportStatus from '../sport/enum/ExecutionReportStatus';
import ExecutionReportErrorCode from '../sport/enum/ExecutionReportErrorCode';
import UpdateInstructionReport from '../sport/UpdateInstructionReport';
export default class UpdateExecutionReport extends JsonResponse {
    private customerRef;
    private status;
    private errorCode;
    private marketId;
    private instructionReports;
    constructor(customerRef?: string, status?: ExecutionReportStatus, errorCode?: ExecutionReportErrorCode, marketId?: string, instructionReports?: UpdateInstructionReport[]);
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
    getInstructionReports(): UpdateInstructionReport[];
    setInstructionReports(instructionReports: UpdateInstructionReport[]): void;
}
