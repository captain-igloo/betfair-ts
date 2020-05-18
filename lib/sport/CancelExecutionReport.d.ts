/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import CancelInstructionReport, { ICancelInstructionReportOptions } from '../sport/CancelInstructionReport';
import ExecutionReportErrorCode from '../sport/enum/ExecutionReportErrorCode';
import ExecutionReportStatus from '../sport/enum/ExecutionReportStatus';
export interface ICancelExecutionReportOptions {
    customerRef?: string;
    status?: ExecutionReportStatus | string;
    errorCode?: ExecutionReportErrorCode | string;
    marketId?: string;
    instructionReports?: (CancelInstructionReport | ICancelInstructionReportOptions)[];
}
export default class CancelExecutionReport extends JsonResponse {
    private customerRef?;
    private status?;
    private errorCode?;
    private marketId?;
    private instructionReports?;
    constructor(options: ICancelExecutionReportOptions);
    toJson(): ICancelExecutionReportOptions;
    getCustomerRef(): string | undefined;
    setCustomerRef(customerRef: string): void;
    getStatus(): ExecutionReportStatus | undefined;
    setStatus(status: ExecutionReportStatus): void;
    getErrorCode(): ExecutionReportErrorCode | undefined;
    setErrorCode(errorCode: ExecutionReportErrorCode): void;
    getMarketId(): string | undefined;
    setMarketId(marketId: string): void;
    getInstructionReports(): CancelInstructionReport[] | undefined;
    setInstructionReports(instructionReports: CancelInstructionReport[]): void;
}
