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
    private status;
    private errorCode?;
    private instruction?;
    private sizeCancelled;
    private cancelledDate;
    constructor(options: ICancelInstructionReportOptions);
    toJson(): ICancelInstructionReportOptions;
    getStatus(): InstructionReportStatus;
    setStatus(status: InstructionReportStatus): void;
    getErrorCode(): InstructionReportErrorCode | undefined;
    setErrorCode(errorCode: InstructionReportErrorCode): void;
    getInstruction(): CancelInstruction | undefined;
    setInstruction(instruction: CancelInstruction): void;
    getSizeCancelled(): number;
    setSizeCancelled(sizeCancelled: number): void;
    getCancelledDate(): Date;
    setCancelledDate(cancelledDate: Date): void;
}
