/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import CancelInstruction from '../sport/CancelInstruction';
import InstructionReportErrorCode from '../sport/enum/InstructionReportErrorCode';
import InstructionReportStatus from '../sport/enum/InstructionReportStatus';

export default class CancelInstructionReport extends JsonMember {
    private status: InstructionReportStatus;
    private errorCode: InstructionReportErrorCode;
    private instruction: CancelInstruction;
    private sizeCancelled: number | null;
    private cancelledDate: Date | null;

    constructor(
        status: InstructionReportStatus = new InstructionReportStatus(),
        errorCode: InstructionReportErrorCode = new InstructionReportErrorCode(),
        instruction: CancelInstruction = new CancelInstruction(),
        sizeCancelled: number | null = null,
        cancelledDate: Date | null = null,
    ) {
        super();
        this.status = status;
        this.errorCode = errorCode;
        this.instruction = instruction;
        this.sizeCancelled = sizeCancelled;
        this.cancelledDate = cancelledDate;
    }

    public fromJson(json: any): void {
        if ('status' in json) {
            this.status.setValue(json.status);
        }
        if ('errorCode' in json) {
            this.errorCode.setValue(json.errorCode);
        }
        if ('instruction' in json) {
            this.instruction.fromJson(json.instruction);
        }
        if ('sizeCancelled' in json) {
            this.sizeCancelled = json.sizeCancelled;
        }
        if ('cancelledDate' in json) {
            this.cancelledDate = new Date(json.cancelledDate);
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
        if (this.instruction.isValid()) {
            json.instruction = this.instruction.toJson();
        }
        if (this.sizeCancelled !== null) {
            json.sizeCancelled = this.sizeCancelled;
        }
        if (this.cancelledDate !== null) {
            json.cancelledDate = this.cancelledDate.toISOString();
        }
        return json;
    }

    public isValid(): boolean {
        return this.status.isValid() &&
            this.sizeCancelled !== null &&
            this.cancelledDate !== null;
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
    public getInstruction(): CancelInstruction {
        return this.instruction;
    }
    public setInstruction(instruction: CancelInstruction): void {
        this.instruction = instruction;
    }
    public getSizeCancelled(): number | null {
        return this.sizeCancelled;
    }
    public setSizeCancelled(sizeCancelled: number | null): void {
        this.sizeCancelled = sizeCancelled;
    }
    public getCancelledDate(): Date | null {
        return this.cancelledDate;
    }
    public setCancelledDate(cancelledDate: Date | null): void {
        this.cancelledDate = cancelledDate;
    }

}
