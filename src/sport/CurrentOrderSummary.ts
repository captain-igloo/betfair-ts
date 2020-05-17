/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import OrderStatus from '../sport/enum/OrderStatus';
import OrderType from '../sport/enum/OrderType';
import PersistenceType from '../sport/enum/PersistenceType';
import Side from '../sport/enum/Side';
import PriceSize, { IPriceSizeOptions } from '../sport/PriceSize';

export interface ICurrentOrderSummaryOptions {
    betId: string;
    marketId: string;
    selectionId: number;
    handicap: number;
    priceSize: PriceSize | IPriceSizeOptions;
    bspLiability: number;
    side: Side | string;
    status: OrderStatus | string;
    persistenceType: PersistenceType | string;
    orderType: OrderType | string;
    placedDate: Date | string;
    matchedDate: Date | string;
    averagePriceMatched?: number;
    sizeMatched?: number;
    sizeRemaining?: number;
    sizeLapsed?: number;
    sizeCancelled?: number;
    sizeVoided?: number;
    regulatorAuthCode?: string;
    regulatorCode?: string;
    customerOrderRef?: string;
    customerStrategyRef?: string;
}

export default class CurrentOrderSummary extends JsonMember {
    private betId: string;
    private marketId: string;
    private selectionId: number;
    private handicap: number;
    private priceSize: PriceSize;
    private bspLiability: number;
    private side: Side;
    private status: OrderStatus;
    private persistenceType: PersistenceType;
    private orderType: OrderType;
    private placedDate: Date;
    private matchedDate: Date;
    private averagePriceMatched?: number;
    private sizeMatched?: number;
    private sizeRemaining?: number;
    private sizeLapsed?: number;
    private sizeCancelled?: number;
    private sizeVoided?: number;
    private regulatorAuthCode?: string;
    private regulatorCode?: string;
    private customerOrderRef?: string;
    private customerStrategyRef?: string;

    constructor(options: ICurrentOrderSummaryOptions) {
        super();
        this.betId = options.betId;
        this.marketId = options.marketId;
        this.selectionId = options.selectionId;
        this.handicap = options.handicap;
        this.priceSize = this.fromJson(options.priceSize, PriceSize);
        this.bspLiability = options.bspLiability;
        this.side = this.fromJson(options.side, Side);
        this.status = this.fromJson(options.status, OrderStatus);
        this.persistenceType = this.fromJson(options.persistenceType, PersistenceType);
        this.orderType = this.fromJson(options.orderType, OrderType);
        this.placedDate = this.fromJson(options.placedDate, Date);
        this.matchedDate = this.fromJson(options.matchedDate, Date);
        this.averagePriceMatched = options.averagePriceMatched;
        this.sizeMatched = options.sizeMatched;
        this.sizeRemaining = options.sizeRemaining;
        this.sizeLapsed = options.sizeLapsed;
        this.sizeCancelled = options.sizeCancelled;
        this.sizeVoided = options.sizeVoided;
        this.regulatorAuthCode = options.regulatorAuthCode;
        this.regulatorCode = options.regulatorCode;
        this.customerOrderRef = options.customerOrderRef;
        this.customerStrategyRef = options.customerStrategyRef;
    }

    public toJson(): ICurrentOrderSummaryOptions {
        const json: ICurrentOrderSummaryOptions = {
            betId: this.betId,
            marketId: this.marketId,
            selectionId: this.selectionId,
            handicap: this.handicap,
            priceSize: this.priceSize.toJson(),
            bspLiability: this.bspLiability,
            side: this.side.getValue(),
            status: this.status.getValue(),
            persistenceType: this.persistenceType.getValue(),
            orderType: this.orderType.getValue(),
            placedDate: this.placedDate.toISOString(),
            matchedDate: this.matchedDate.toISOString(),
        };
        if (typeof this.averagePriceMatched !== 'undefined') {
            json.averagePriceMatched = this.averagePriceMatched;
        }
        if (typeof this.sizeMatched !== 'undefined') {
            json.sizeMatched = this.sizeMatched;
        }
        if (typeof this.sizeRemaining !== 'undefined') {
            json.sizeRemaining = this.sizeRemaining;
        }
        if (typeof this.sizeLapsed !== 'undefined') {
            json.sizeLapsed = this.sizeLapsed;
        }
        if (typeof this.sizeCancelled !== 'undefined') {
            json.sizeCancelled = this.sizeCancelled;
        }
        if (typeof this.sizeVoided !== 'undefined') {
            json.sizeVoided = this.sizeVoided;
        }
        if (typeof this.regulatorAuthCode !== 'undefined') {
            json.regulatorAuthCode = this.regulatorAuthCode;
        }
        if (typeof this.regulatorCode !== 'undefined') {
            json.regulatorCode = this.regulatorCode;
        }
        if (typeof this.customerOrderRef !== 'undefined') {
            json.customerOrderRef = this.customerOrderRef;
        }
        if (typeof this.customerStrategyRef !== 'undefined') {
            json.customerStrategyRef = this.customerStrategyRef;
        }
        return json;
    }

    public getBetId(): string {
        return this.betId;
    }
    public setBetId(betId: string): void {
        this.betId = betId;
    }
    public getMarketId(): string {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getSelectionId(): number {
        return this.selectionId;
    }
    public setSelectionId(selectionId: number): void {
        this.selectionId = selectionId;
    }
    public getHandicap(): number {
        return this.handicap;
    }
    public setHandicap(handicap: number): void {
        this.handicap = handicap;
    }
    public getPriceSize(): PriceSize {
        return this.priceSize;
    }
    public setPriceSize(priceSize: PriceSize): void {
        this.priceSize = priceSize;
    }
    public getBspLiability(): number {
        return this.bspLiability;
    }
    public setBspLiability(bspLiability: number): void {
        this.bspLiability = bspLiability;
    }
    public getSide(): Side {
        return this.side;
    }
    public setSide(side: Side): void {
        this.side = side;
    }
    public getStatus(): OrderStatus {
        return this.status;
    }
    public setStatus(status: OrderStatus): void {
        this.status = status;
    }
    public getPersistenceType(): PersistenceType {
        return this.persistenceType;
    }
    public setPersistenceType(persistenceType: PersistenceType): void {
        this.persistenceType = persistenceType;
    }
    public getOrderType(): OrderType {
        return this.orderType;
    }
    public setOrderType(orderType: OrderType): void {
        this.orderType = orderType;
    }
    public getPlacedDate(): Date {
        return this.placedDate;
    }
    public setPlacedDate(placedDate: Date): void {
        this.placedDate = placedDate;
    }
    public getMatchedDate(): Date {
        return this.matchedDate;
    }
    public setMatchedDate(matchedDate: Date): void {
        this.matchedDate = matchedDate;
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
    public getSizeRemaining(): number | undefined {
        return this.sizeRemaining;
    }
    public setSizeRemaining(sizeRemaining: number): void {
        this.sizeRemaining = sizeRemaining;
    }
    public getSizeLapsed(): number | undefined {
        return this.sizeLapsed;
    }
    public setSizeLapsed(sizeLapsed: number): void {
        this.sizeLapsed = sizeLapsed;
    }
    public getSizeCancelled(): number | undefined {
        return this.sizeCancelled;
    }
    public setSizeCancelled(sizeCancelled: number): void {
        this.sizeCancelled = sizeCancelled;
    }
    public getSizeVoided(): number | undefined {
        return this.sizeVoided;
    }
    public setSizeVoided(sizeVoided: number): void {
        this.sizeVoided = sizeVoided;
    }
    public getRegulatorAuthCode(): string | undefined {
        return this.regulatorAuthCode;
    }
    public setRegulatorAuthCode(regulatorAuthCode: string): void {
        this.regulatorAuthCode = regulatorAuthCode;
    }
    public getRegulatorCode(): string | undefined {
        return this.regulatorCode;
    }
    public setRegulatorCode(regulatorCode: string): void {
        this.regulatorCode = regulatorCode;
    }
    public getCustomerOrderRef(): string | undefined {
        return this.customerOrderRef;
    }
    public setCustomerOrderRef(customerOrderRef: string): void {
        this.customerOrderRef = customerOrderRef;
    }
    public getCustomerStrategyRef(): string | undefined {
        return this.customerStrategyRef;
    }
    public setCustomerStrategyRef(customerStrategyRef: string): void {
        this.customerStrategyRef = customerStrategyRef;
    }

}
