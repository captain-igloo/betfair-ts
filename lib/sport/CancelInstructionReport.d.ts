/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import CancelInstruction from '../sport/CancelInstruction';
import InstructionReportErrorCode from '../sport/enum/InstructionReportErrorCode';
import InstructionReportStatus from '../sport/enum/InstructionReportStatus';
export default class CancelInstructionReport extends JsonMember {
    private status;
    private errorCode;
    private instruction;
    private sizeCancelled;
    private cancelledDate;
    constructor(status?: InstructionReportStatus, errorCode?: InstructionReportErrorCode, instruction?: CancelInstruction, sizeCancelled?: number | null, cancelledDate?: Date | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getStatus(): InstructionReportStatus;
    setStatus(status: InstructionReportStatus): void;
    getErrorCode(): InstructionReportErrorCode;
    setErrorCode(errorCode: InstructionReportErrorCode): void;
    getInstruction(): CancelInstruction;
    setInstruction(instruction: CancelInstruction): void;
    getSizeCancelled(): number | null;
    setSizeCancelled(sizeCancelled: number | null): void;
    getCancelledDate(): Date | null;
    setCancelledDate(cancelledDate: Date | null): void;
}
