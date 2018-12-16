/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import InstructionReportStatus from '../sport/enum/InstructionReportStatus';
import InstructionReportErrorCode from '../sport/enum/InstructionReportErrorCode';
import CancelInstructionReport from '../sport/CancelInstructionReport';
import PlaceInstructionReport from '../sport/PlaceInstructionReport';
export default class ReplaceInstructionReport extends JsonMember {
    private status;
    private errorCode;
    private cancelInstructionReport;
    private placeInstructionReport;
    constructor(status?: InstructionReportStatus, errorCode?: InstructionReportErrorCode, cancelInstructionReport?: CancelInstructionReport, placeInstructionReport?: PlaceInstructionReport);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getStatus(): InstructionReportStatus;
    setStatus(status: InstructionReportStatus): void;
    getErrorCode(): InstructionReportErrorCode;
    setErrorCode(errorCode: InstructionReportErrorCode): void;
    getCancelInstructionReport(): CancelInstructionReport;
    setCancelInstructionReport(cancelInstructionReport: CancelInstructionReport): void;
    getPlaceInstructionReport(): PlaceInstructionReport;
    setPlaceInstructionReport(placeInstructionReport: PlaceInstructionReport): void;
}
