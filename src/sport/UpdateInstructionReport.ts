/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import InstructionReportStatus from '../sport/enum/InstructionReportStatus';
import InstructionReportErrorCode from '../sport/enum/InstructionReportErrorCode';
import UpdateInstruction from '../sport/UpdateInstruction';

export default class UpdateInstructionReport extends JsonMember {
    private status: InstructionReportStatus;
    private errorCode: InstructionReportErrorCode;
    private instruction: UpdateInstruction;

    constructor(
        status: InstructionReportStatus = new InstructionReportStatus(),
        errorCode: InstructionReportErrorCode = new InstructionReportErrorCode(),
        instruction: UpdateInstruction = new UpdateInstruction(),
    ) {
        super();
        this.status = status;
        this.errorCode = errorCode;
        this.instruction = instruction;
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
        return json;
    }

    public isValid(): boolean {
        return this.status.isValid() &&
            this.instruction.isValid();
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
    public getInstruction(): UpdateInstruction {
        return this.instruction;
    }
    public setInstruction(instruction: UpdateInstruction): void {
        this.instruction = instruction;
    }

}
