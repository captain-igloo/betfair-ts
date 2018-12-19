/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import InstructionReportErrorCode from '../sport/enum/InstructionReportErrorCode';
import InstructionReportStatus from '../sport/enum/InstructionReportStatus';
import OrderStatus from '../sport/enum/OrderStatus';
import PlaceInstruction from '../sport/PlaceInstruction';
export default class PlaceInstructionReport extends JsonMember {
    private status;
    private errorCode;
    private orderStatus;
    private instruction;
    private betId;
    private placedDate;
    private averagePriceMatched;
    private sizeMatched;
    constructor(status?: InstructionReportStatus, errorCode?: InstructionReportErrorCode, orderStatus?: OrderStatus, instruction?: PlaceInstruction, betId?: string, placedDate?: Date | null, averagePriceMatched?: number | null, sizeMatched?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getStatus(): InstructionReportStatus;
    setStatus(status: InstructionReportStatus): void;
    getErrorCode(): InstructionReportErrorCode;
    setErrorCode(errorCode: InstructionReportErrorCode): void;
    getOrderStatus(): OrderStatus;
    setOrderStatus(orderStatus: OrderStatus): void;
    getInstruction(): PlaceInstruction;
    setInstruction(instruction: PlaceInstruction): void;
    getBetId(): string;
    setBetId(betId: string): void;
    getPlacedDate(): Date | null;
    setPlacedDate(placedDate: Date | null): void;
    getAveragePriceMatched(): number | null;
    setAveragePriceMatched(averagePriceMatched: number | null): void;
    getSizeMatched(): number | null;
    setSizeMatched(sizeMatched: number | null): void;
}
