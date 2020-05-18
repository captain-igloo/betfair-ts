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
    instructionReports?: (ReplaceInstructionReport | IReplaceInstructionReportOptions)[];
}
export default class ReplaceExecutionReport extends JsonResponse {
    private customerRef?;
    private status?;
    private errorCode?;
    private marketId?;
    private instructionReports?;
    constructor(options: IReplaceExecutionReportOptions);
    toJson(): IReplaceExecutionReportOptions;
    getCustomerRef(): string | undefined;
    setCustomerRef(customerRef: string): void;
    getStatus(): ExecutionReportStatus | undefined;
    setStatus(status: ExecutionReportStatus): void;
    getErrorCode(): ExecutionReportErrorCode | undefined;
    setErrorCode(errorCode: ExecutionReportErrorCode): void;
    getMarketId(): string | undefined;
    setMarketId(marketId: string): void;
    getInstructionReports(): ReplaceInstructionReport[] | undefined;
    setInstructionReports(instructionReports: ReplaceInstructionReport[]): void;
}
