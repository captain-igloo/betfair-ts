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
    private status;
    private errorCode?;
    private orderStatus?;
    private instruction;
    private betId?;
    private placedDate?;
    private averagePriceMatched?;
    private sizeMatched?;
    constructor(options: IPlaceInstructionReportOptions);
    toJson(): IPlaceInstructionReportOptions;
    getStatus(): InstructionReportStatus;
    setStatus(status: InstructionReportStatus): void;
    getErrorCode(): InstructionReportErrorCode | undefined;
    setErrorCode(errorCode: InstructionReportErrorCode): void;
    getOrderStatus(): OrderStatus | undefined;
    setOrderStatus(orderStatus: OrderStatus): void;
    getInstruction(): PlaceInstruction;
    setInstruction(instruction: PlaceInstruction): void;
    getBetId(): string | undefined;
    setBetId(betId: string): void;
    getPlacedDate(): Date | undefined;
    setPlacedDate(placedDate: Date): void;
    getAveragePriceMatched(): number | undefined;
    setAveragePriceMatched(averagePriceMatched: number): void;
    getSizeMatched(): number | undefined;
    setSizeMatched(sizeMatched: number): void;
}
