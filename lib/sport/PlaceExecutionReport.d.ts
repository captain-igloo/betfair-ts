/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import ExecutionReportErrorCode from '../sport/enum/ExecutionReportErrorCode';
import ExecutionReportStatus from '../sport/enum/ExecutionReportStatus';
import PlaceInstructionReport, { IPlaceInstructionReportOptions } from '../sport/PlaceInstructionReport';
export interface IPlaceExecutionReportOptions {
    customerRef?: string;
    status?: ExecutionReportStatus | string;
    errorCode?: ExecutionReportErrorCode | string;
    marketId?: string;
    instructionReports?: Array<PlaceInstructionReport | IPlaceInstructionReportOptions>;
}
export default class PlaceExecutionReport extends JsonResponse {
    private customerRef?;
    private status?;
    private errorCode?;
    private marketId?;
    private instructionReports?;
    constructor(options: IPlaceExecutionReportOptions);
    toJson(): IPlaceExecutionReportOptions;
    getCustomerRef(): string | undefined;
    setCustomerRef(customerRef: string): void;
    getStatus(): ExecutionReportStatus | undefined;
    setStatus(status: ExecutionReportStatus): void;
    getErrorCode(): ExecutionReportErrorCode | undefined;
    setErrorCode(errorCode: ExecutionReportErrorCode): void;
    getMarketId(): string | undefined;
    setMarketId(marketId: string): void;
    getInstructionReports(): PlaceInstructionReport[] | undefined;
    setInstructionReports(instructionReports: PlaceInstructionReport[]): void;
}
