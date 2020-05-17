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
    private status: InstructionReportStatus;
    private errorCode?: InstructionReportErrorCode;
    private cancelInstructionReport?: CancelInstructionReport;
    private placeInstructionReport?: PlaceInstructionReport;

    constructor(options: IReplaceInstructionReportOptions) {
        super();
        this.status = this.fromJson(options.status, InstructionReportStatus);
        if (options.errorCode) {
            this.errorCode = this.fromJson(options.errorCode, InstructionReportErrorCode);
        }
        this.cancelInstructionReport = options.cancelInstructionReport && this.fromJson(options.cancelInstructionReport, CancelInstructionReport);
        this.placeInstructionReport = options.placeInstructionReport && this.fromJson(options.placeInstructionReport, PlaceInstructionReport);
    }

    public toJson(): IReplaceInstructionReportOptions {
        const json: IReplaceInstructionReportOptions = {
            status: this.status.getValue(),
        };
        if (this.errorCode) {
            json.errorCode = this.errorCode.getValue();
        }
        if (this.cancelInstructionReport) {
            json.cancelInstructionReport = this.cancelInstructionReport.toJson();
        }
        if (this.placeInstructionReport) {
            json.placeInstructionReport = this.placeInstructionReport.toJson();
        }
        return json;
    }

    public getStatus(): InstructionReportStatus {
        return this.status;
    }
    public setStatus(status: InstructionReportStatus): void {
        this.status = status;
    }
    public getErrorCode(): InstructionReportErrorCode | undefined {
        return this.errorCode;
    }
    public setErrorCode(errorCode: InstructionReportErrorCode): void {
        this.errorCode = errorCode;
    }
    public getCancelInstructionReport(): CancelInstructionReport | undefined {
        return this.cancelInstructionReport;
    }
    public setCancelInstructionReport(cancelInstructionReport: CancelInstructionReport): void {
        this.cancelInstructionReport = cancelInstructionReport;
    }
    public getPlaceInstructionReport(): PlaceInstructionReport | undefined {
        return this.placeInstructionReport;
    }
    public setPlaceInstructionReport(placeInstructionReport: PlaceInstructionReport): void {
        this.placeInstructionReport = placeInstructionReport;
    }

}
