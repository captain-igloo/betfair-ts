/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import InstructionReportErrorCode from '../sport/enum/InstructionReportErrorCode';
import InstructionReportStatus from '../sport/enum/InstructionReportStatus';
import OrderStatus from '../sport/enum/OrderStatus';
import PlaceInstruction from '../sport/PlaceInstruction';

export default class PlaceInstructionReport extends JsonMember {
    private status: InstructionReportStatus;
    private errorCode: InstructionReportErrorCode;
    private orderStatus: OrderStatus;
    private instruction: PlaceInstruction;
    private betId: string;
    private placedDate: Date | null;
    private averagePriceMatched: number | null;
    private sizeMatched: number | null;

    constructor(
        status: InstructionReportStatus = new InstructionReportStatus(),
        errorCode: InstructionReportErrorCode = new InstructionReportErrorCode(),
        orderStatus: OrderStatus = new OrderStatus(),
        instruction: PlaceInstruction = new PlaceInstruction(),
        betId: string = '',
        placedDate: Date | null = null,
        averagePriceMatched: number | null = null,
        sizeMatched: number | null = null,
    ) {
        super();
        this.status = status;
        this.errorCode = errorCode;
        this.orderStatus = orderStatus;
        this.instruction = instruction;
        this.betId = betId;
        this.placedDate = placedDate;
        this.averagePriceMatched = averagePriceMatched;
        this.sizeMatched = sizeMatched;
    }

    public fromJson(json: any): void {
        if ('status' in json) {
            this.status.setValue(json.status);
        }
        if ('errorCode' in json) {
            this.errorCode.setValue(json.errorCode);
        }
        if ('orderStatus' in json) {
            this.orderStatus.setValue(json.orderStatus);
        }
        if ('instruction' in json) {
            this.instruction.fromJson(json.instruction);
        }
        if ('betId' in json) {
            this.betId = json.betId;
        }
        if ('placedDate' in json) {
            this.placedDate = new Date(json.placedDate);
        }
        if ('averagePriceMatched' in json) {
            this.averagePriceMatched = json.averagePriceMatched;
        }
        if ('sizeMatched' in json) {
            this.sizeMatched = json.sizeMatched;
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
        if (this.orderStatus.isValid()) {
            json.orderStatus = this.orderStatus;
        }
        if (this.instruction.isValid()) {
            json.instruction = this.instruction.toJson();
        }
        if (this.betId !== '') {
            json.betId = this.betId;
        }
        if (this.placedDate !== null) {
            json.placedDate = this.placedDate.toISOString();
        }
        if (this.averagePriceMatched !== null) {
            json.averagePriceMatched = this.averagePriceMatched;
        }
        if (this.sizeMatched !== null) {
            json.sizeMatched = this.sizeMatched;
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
    public getOrderStatus(): OrderStatus {
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
    public getBetId(): string {
        return this.betId;
    }
    public setBetId(betId: string): void {
        this.betId = betId;
    }
    public getPlacedDate(): Date | null {
        return this.placedDate;
    }
    public setPlacedDate(placedDate: Date | null): void {
        this.placedDate = placedDate;
    }
    public getAveragePriceMatched(): number | null {
        return this.averagePriceMatched;
    }
    public setAveragePriceMatched(averagePriceMatched: number | null): void {
        this.averagePriceMatched = averagePriceMatched;
    }
    public getSizeMatched(): number | null {
        return this.sizeMatched;
    }
    public setSizeMatched(sizeMatched: number | null): void {
        this.sizeMatched = sizeMatched;
    }

}
