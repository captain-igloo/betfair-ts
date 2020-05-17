/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import CancelInstruction, { ICancelInstructionOptions } from '../sport/CancelInstruction';
import InstructionReportErrorCode from '../sport/enum/InstructionReportErrorCode';
import InstructionReportStatus from '../sport/enum/InstructionReportStatus';

export interface ICancelInstructionReportOptions {
    status: InstructionReportStatus | string;
    errorCode?: InstructionReportErrorCode | string;
    instruction?: CancelInstruction | ICancelInstructionOptions;
    sizeCancelled: number;
    cancelledDate: Date | string;
}

export default class CancelInstructionReport extends JsonMember {
    private status: InstructionReportStatus;
    private errorCode?: InstructionReportErrorCode;
    private instruction?: CancelInstruction;
    private sizeCancelled: number;
    private cancelledDate: Date;

    constructor(options: ICancelInstructionReportOptions) {
        super();
        this.status = this.fromJson(options.status, InstructionReportStatus);
        if (options.errorCode) {
            this.errorCode = this.fromJson(options.errorCode, InstructionReportErrorCode);
        }
        this.instruction = options.instruction && this.fromJson(options.instruction, CancelInstruction);
        this.sizeCancelled = options.sizeCancelled;
        this.cancelledDate = this.fromJson(options.cancelledDate, Date);
    }

    public toJson(): ICancelInstructionReportOptions {
        const json: ICancelInstructionReportOptions = {
            status: this.status.getValue(),
            sizeCancelled: this.sizeCancelled,
            cancelledDate: this.cancelledDate.toISOString(),
        };
        if (this.errorCode) {
            json.errorCode = this.errorCode.getValue();
        }
        if (this.instruction) {
            json.instruction = this.instruction.toJson();
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
    public getInstruction(): CancelInstruction | undefined {
        return this.instruction;
    }
    public setInstruction(instruction: CancelInstruction): void {
        this.instruction = instruction;
    }
    public getSizeCancelled(): number {
        return this.sizeCancelled;
    }
    public setSizeCancelled(sizeCancelled: number): void {
        this.sizeCancelled = sizeCancelled;
    }
    public getCancelledDate(): Date {
        return this.cancelledDate;
    }
    public setCancelledDate(cancelledDate: Date): void {
        this.cancelledDate = cancelledDate;
    }

}
