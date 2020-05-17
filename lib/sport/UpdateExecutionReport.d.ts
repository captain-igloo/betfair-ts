/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import ExecutionReportErrorCode from '../sport/enum/ExecutionReportErrorCode';
import ExecutionReportStatus from '../sport/enum/ExecutionReportStatus';
import UpdateInstructionReport, { IUpdateInstructionReportOptions } from '../sport/UpdateInstructionReport';
export interface IUpdateExecutionReportOptions {
    customerRef?: string;
    status?: ExecutionReportStatus | string;
    errorCode?: ExecutionReportErrorCode | string;
    marketId?: string;
    instructionReports?: Array<UpdateInstructionReport | IUpdateInstructionReportOptions>;
}
export default class UpdateExecutionReport extends JsonResponse {
    private customerRef?;
    private status?;
    private errorCode?;
    private marketId?;
    private instructionReports?;
    constructor(options: IUpdateExecutionReportOptions);
    toJson(): IUpdateExecutionReportOptions;
    getCustomerRef(): string | undefined;
    setCustomerRef(customerRef: string): void;
    getStatus(): ExecutionReportStatus | undefined;
    setStatus(status: ExecutionReportStatus): void;
    getErrorCode(): ExecutionReportErrorCode | undefined;
    setErrorCode(errorCode: ExecutionReportErrorCode): void;
    getMarketId(): string | undefined;
    setMarketId(marketId: string): void;
    getInstructionReports(): UpdateInstructionReport[] | undefined;
    setInstructionReports(instructionReports: UpdateInstructionReport[]): void;
}
