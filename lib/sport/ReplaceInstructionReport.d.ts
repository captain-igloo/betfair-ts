/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import CancelInstructionReport, { ICancelInstructionReportOptions } from '../sport/CancelInstructionReport';
import InstructionReportErrorCode from '../sport/enum/InstructionReportErrorCode';
import InstructionReportStatus from '../sport/enum/InstructionReportStatus';
import PlaceInstructionReport, { IPlaceInstructionReportOptions } from '../sport/PlaceInstructionReport';
export interface IReplaceInstructionReportOptions {
    status: InstructionReportStatus | string;
    errorCode?: InstructionReportErrorCode | string;
    cancelInstructionReport?: CancelInstructionReport | ICancelInstructionReportOptions;
    placeInstructionReport?: PlaceInstructionReport | IPlaceInstructionReportOptions;
}
export default class ReplaceInstructionReport extends JsonMember {
    private status;
    private errorCode?;
    private cancelInstructionReport?;
    private placeInstructionReport?;
    constructor(options: IReplaceInstructionReportOptions);
    toJson(): IReplaceInstructionReportOptions;
    getStatus(): InstructionReportStatus;
    setStatus(status: InstructionReportStatus): void;
    getErrorCode(): InstructionReportErrorCode | undefined;
    setErrorCode(errorCode: InstructionReportErrorCode): void;
    getCancelInstructionReport(): CancelInstructionReport | undefined;
    setCancelInstructionReport(cancelInstructionReport: CancelInstructionReport): void;
    getPlaceInstructionReport(): PlaceInstructionReport | undefined;
    setPlaceInstructionReport(placeInstructionReport: PlaceInstructionReport): void;
}
