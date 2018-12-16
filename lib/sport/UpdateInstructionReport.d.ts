/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import InstructionReportStatus from '../sport/enum/InstructionReportStatus';
import InstructionReportErrorCode from '../sport/enum/InstructionReportErrorCode';
import UpdateInstruction from '../sport/UpdateInstruction';
export default class UpdateInstructionReport extends JsonMember {
    private status;
    private errorCode;
    private instruction;
    constructor(status?: InstructionReportStatus, errorCode?: InstructionReportErrorCode, instruction?: UpdateInstruction);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getStatus(): InstructionReportStatus;
    setStatus(status: InstructionReportStatus): void;
    getErrorCode(): InstructionReportErrorCode;
    setErrorCode(errorCode: InstructionReportErrorCode): void;
    getInstruction(): UpdateInstruction;
    setInstruction(instruction: UpdateInstruction): void;
}
