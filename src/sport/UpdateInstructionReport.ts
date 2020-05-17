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
    private status: InstructionReportStatus;
    private errorCode?: InstructionReportErrorCode;
    private instruction: UpdateInstruction;

    constructor(options: IUpdateInstructionReportOptions) {
        super();
        this.status = this.fromJson(options.status, InstructionReportStatus);
        if (options.errorCode) {
            this.errorCode = this.fromJson(options.errorCode, InstructionReportErrorCode);
        }
        this.instruction = this.fromJson(options.instruction, UpdateInstruction);
    }

    public toJson(): IUpdateInstructionReportOptions {
        const json: IUpdateInstructionReportOptions = {
            status: this.status.getValue(),
            instruction: this.instruction.toJson(),
        };
        if (this.errorCode) {
            json.errorCode = this.errorCode.getValue();
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
    public getInstruction(): UpdateInstruction {
        return this.instruction;
    }
    public setInstruction(instruction: UpdateInstruction): void {
        this.instruction = instruction;
    }

}
