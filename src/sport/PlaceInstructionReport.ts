/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import InstructionReportErrorCode from '../sport/enum/InstructionReportErrorCode';
import InstructionReportStatus from '../sport/enum/InstructionReportStatus';
import OrderStatus from '../sport/enum/OrderStatus';
import PlaceInstruction, { IPlaceInstructionOptions } from '../sport/PlaceInstruction';

export interface IPlaceInstructionReportOptions {
    status: InstructionReportStatus | string;
    errorCode?: InstructionReportErrorCode | string;
    orderStatus?: OrderStatus | string;
    instruction: PlaceInstruction | IPlaceInstructionOptions;
    betId?: string;
    placedDate?: Date | string;
    averagePriceMatched?: number;
    sizeMatched?: number;
}

export default class PlaceInstructionReport extends JsonMember {
    private status: InstructionReportStatus;
    private errorCode?: InstructionReportErrorCode;
    private orderStatus?: OrderStatus;
    private instruction: PlaceInstruction;
    private betId?: string;
    private placedDate?: Date;
    private averagePriceMatched?: number;
    private sizeMatched?: number;

    constructor(options: IPlaceInstructionReportOptions) {
        super();
        this.status = this.fromJson(options.status, InstructionReportStatus);
        if (options.errorCode) {
            this.errorCode = this.fromJson(options.errorCode, InstructionReportErrorCode);
        }
        if (options.orderStatus) {
            this.orderStatus = this.fromJson(options.orderStatus, OrderStatus);
        }
        this.instruction = this.fromJson(options.instruction, PlaceInstruction);
        this.betId = options.betId;
        if (options.placedDate) {
            this.placedDate = this.fromJson(options.placedDate, Date);
        }
        this.averagePriceMatched = options.averagePriceMatched;
        this.sizeMatched = options.sizeMatched;
    }

    public toJson(): IPlaceInstructionReportOptions {
        const json: IPlaceInstructionReportOptions = {
            status: this.status.getValue(),
            instruction: this.instruction.toJson(),
        };
        if (this.errorCode) {
            json.errorCode = this.errorCode.getValue();
        }
        if (this.orderStatus) {
            json.orderStatus = this.orderStatus.getValue();
        }
        if (typeof this.betId !== 'undefined') {
            json.betId = this.betId;
        }
        if (typeof this.placedDate !== 'undefined') {
            json.placedDate = this.placedDate.toISOString();
        }
        if (typeof this.averagePriceMatched !== 'undefined') {
            json.averagePriceMatched = this.averagePriceMatched;
        }
        if (typeof this.sizeMatched !== 'undefined') {
            json.sizeMatched = this.sizeMatched;
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
    public getOrderStatus(): OrderStatus | undefined {
        return this.orderStatus;
    }
    public setOrderStatus(orderStatus: OrderStatus): void {
        this.orderStatus = orderStatus;
    }
    public getInstruction(): PlaceInstruction {
        return this.instruction;
    }
    public setInstruction(instruction: PlaceInstruction): void {
        this.instruction = instruction;
    }
    public getBetId(): string | undefined {
        return this.betId;
    }
    public setBetId(betId: string): void {
        this.betId = betId;
    }
    public getPlacedDate(): Date | undefined {
        return this.placedDate;
    }
    public setPlacedDate(placedDate: Date): void {
        this.placedDate = placedDate;
    }
    public getAveragePriceMatched(): number | undefined {
        return this.averagePriceMatched;
    }
    public setAveragePriceMatched(averagePriceMatched: number): void {
        this.averagePriceMatched = averagePriceMatched;
    }
    public getSizeMatched(): number | undefined {
        return this.sizeMatched;
    }
    public setSizeMatched(sizeMatched: number): void {
        this.sizeMatched = sizeMatched;
    }

}
