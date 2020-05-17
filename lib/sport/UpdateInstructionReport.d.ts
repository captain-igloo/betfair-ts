/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import InstructionReportErrorCode from '../sport/enum/InstructionReportErrorCode';
import InstructionReportStatus from '../sport/enum/InstructionReportStatus';
import UpdateInstruction, { IUpdateInstructionOptions } from '../sport/UpdateInstruction';
export interface IUpdateInstructionReportOptions {
    status: InstructionReportStatus | string;
    errorCode?: InstructionReportErrorCode | string;
    instruction: UpdateInstruction | IUpdateInstructionOptions;
}
export default class UpdateInstructionReport extends JsonMember {
    private status;
    private errorCode?;
    private instruction;
    constructor(options: IUpdateInstructionReportOptions);
    toJson(): IUpdateInstructionReportOptions;
    getStatus(): InstructionReportStatus;
    setStatus(status: InstructionReportStatus): void;
    getErrorCode(): InstructionReportErrorCode | undefined;
    setErrorCode(errorCode: InstructionReportErrorCode): void;
    getInstruction(): UpdateInstruction;
    setInstruction(instruction: UpdateInstruction): void;
}
