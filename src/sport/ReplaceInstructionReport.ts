/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import CancelInstructionReport from '../sport/CancelInstructionReport';
import InstructionReportErrorCode from '../sport/enum/InstructionReportErrorCode';
import InstructionReportStatus from '../sport/enum/InstructionReportStatus';
import PlaceInstructionReport from '../sport/PlaceInstructionReport';

export default class ReplaceInstructionReport extends JsonMember {
    private status: InstructionReportStatus;
    private errorCode: InstructionReportErrorCode;
    private cancelInstructionReport: CancelInstructionReport;
    private placeInstructionReport: PlaceInstructionReport;

    constructor(
        status: InstructionReportStatus = new InstructionReportStatus(),
        errorCode: InstructionReportErrorCode = new InstructionReportErrorCode(),
        cancelInstructionReport: CancelInstructionReport = new CancelInstructionReport(),
        placeInstructionReport: PlaceInstructionReport = new PlaceInstructionReport(),
    ) {
        super();
        this.status = status;
        this.errorCode = errorCode;
        this.cancelInstructionReport = cancelInstructionReport;
        this.placeInstructionReport = placeInstructionReport;
    }

    public fromJson(json: any): void {
        if ('status' in json) {
            this.status.setValue(json.status);
        }
        if ('errorCode' in json) {
            this.errorCode.setValue(json.errorCode);
        }
        if ('cancelInstructionReport' in json) {
            this.cancelInstructionReport.fromJson(json.cancelInstructionReport);
        }
        if ('placeInstructionReport' in json) {
            this.placeInstructionReport.fromJson(json.placeInstructionReport);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.status.isValid()) {
            json.status = this.status;
        }
        if (this.errorCode.isValid()) {
            json.errorCode = this.errorCode;
        }
        if (this.cancelInstructionReport.isValid()) {
            json.cancelInstructionReport = this.cancelInstructionReport.toJson();
        }
        if (this.placeInstructionReport.isValid()) {
            json.placeInstructionReport = this.placeInstructionReport.toJson();
        }
        return json;
    }

    public isValid(): boolean {
        return this.status.isValid();
    }

    public getStatus(): InstructionReportStatus {
        return this.status;
    }
    public setStatus(status: InstructionReportStatus): void {
        this.status = status;
    }
    public getErrorCode(): InstructionReportErrorCode {
        return this.errorCode;
    }
    public setErrorCode(errorCode: InstructionReportErrorCode): void {
        this.errorCode = errorCode;
    }
    public getCancelInstructionReport(): CancelInstructionReport {
        return this.cancelInstructionReport;
    }
    public setCancelInstructionReport(cancelInstructionReport: CancelInstructionReport): void {
        this.cancelInstructionReport = cancelInstructionReport;
    }
    public getPlaceInstructionReport(): PlaceInstructionReport {
        return this.placeInstructionReport;
    }
    public setPlaceInstructionReport(placeInstructionReport: PlaceInstructionReport): void {
        this.placeInstructionReport = placeInstructionReport;
    }

}
