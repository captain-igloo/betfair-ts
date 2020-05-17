/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import OrderType from '../sport/enum/OrderType';
import PersistenceType from '../sport/enum/PersistenceType';
import Side from '../sport/enum/Side';
import ItemDescription, { IItemDescriptionOptions } from '../sport/ItemDescription';

export interface IClearedOrderSummaryOptions {
    eventTypeId?: string;
    eventId?: string;
    marketId?: string;
    selectionId?: number;
    handicap?: number;
    betId?: string;
    placedDate?: Date | string;
    persistenceType?: PersistenceType | string;
    orderType?: OrderType | string;
    side?: Side | string;
    itemDescription?: ItemDescription | IItemDescriptionOptions;
    betOutcome?: string;
    priceRequested?: number;
    settledDate?: Date | string;
    lastMatchedDate?: Date | string;
    betCount?: number;
    commission?: number;
    priceMatched?: number;
    priceReduced?: boolean;
    sizeSettled?: number;
    profit?: number;
    sizeCancelled?: number;
    customerOrderRef?: string;
    customerStrategyRef?: string;
}

export default class ClearedOrderSummary extends JsonMember {
    private eventTypeId?: string;
    private eventId?: string;
    private marketId?: string;
    private selectionId?: number;
    private handicap?: number;
    private betId?: string;
    private placedDate?: Date;
    private persistenceType?: PersistenceType;
    private orderType?: OrderType;
    private side?: Side;
    private itemDescription?: ItemDescription;
    private betOutcome?: string;
    private priceRequested?: number;
    private settledDate?: Date;
    private lastMatchedDate?: Date;
    private betCount?: number;
    private commission?: number;
    private priceMatched?: number;
    private priceReduced?: boolean;
    private sizeSettled?: number;
    private profit?: number;
    private sizeCancelled?: number;
    private customerOrderRef?: string;
    private customerStrategyRef?: string;

    constructor(options: IClearedOrderSummaryOptions) {
        super();
        this.eventTypeId = options.eventTypeId;
        this.eventId = options.eventId;
        this.marketId = options.marketId;
        this.selectionId = options.selectionId;
        this.handicap = options.handicap;
        this.betId = options.betId;
        if (options.placedDate) {
            this.placedDate = this.fromJson(options.placedDate, Date);
        }
        if (options.persistenceType) {
            this.persistenceType = this.fromJson(options.persistenceType, PersistenceType);
        }
        if (options.orderType) {
            this.orderType = this.fromJson(options.orderType, OrderType);
        }
        if (options.side) {
            this.side = this.fromJson(options.side, Side);
        }
        this.itemDescription = options.itemDescription && this.fromJson(options.itemDescription, ItemDescription);
        this.betOutcome = options.betOutcome;
        this.priceRequested = options.priceRequested;
        if (options.settledDate) {
            this.settledDate = this.fromJson(options.settledDate, Date);
        }
        if (options.lastMatchedDate) {
            this.lastMatchedDate = this.fromJson(options.lastMatchedDate, Date);
        }
        this.betCount = options.betCount;
        this.commission = options.commission;
        this.priceMatched = options.priceMatched;
        this.priceReduced = options.priceReduced;
        this.sizeSettled = options.sizeSettled;
        this.profit = options.profit;
        this.sizeCancelled = options.sizeCancelled;
        this.customerOrderRef = options.customerOrderRef;
        this.customerStrategyRef = options.customerStrategyRef;
    }

    public toJson(): IClearedOrderSummaryOptions {
        const json: IClearedOrderSummaryOptions = {
        };
        if (typeof this.eventTypeId !== 'undefined') {
            json.eventTypeId = this.eventTypeId;
        }
        if (typeof this.eventId !== 'undefined') {
            json.eventId = this.eventId;
        }
        if (typeof this.marketId !== 'undefined') {
            json.marketId = this.marketId;
        }
        if (typeof this.selectionId !== 'undefined') {
            json.selectionId = this.selectionId;
        }
        if (typeof this.handicap !== 'undefined') {
            json.handicap = this.handicap;
        }
        if (typeof this.betId !== 'undefined') {
            json.betId = this.betId;
        }
        if (typeof this.placedDate !== 'undefined') {
            json.placedDate = this.placedDate.toISOString();
        }
        if (this.persistenceType) {
            json.persistenceType = this.persistenceType.getValue();
        }
        if (this.orderType) {
            json.orderType = this.orderType.getValue();
        }
        if (this.side) {
            json.side = this.side.getValue();
        }
        if (this.itemDescription) {
            json.itemDescription = this.itemDescription.toJson();
        }
        if (typeof this.betOutcome !== 'undefined') {
            json.betOutcome = this.betOutcome;
        }
        if (typeof this.priceRequested !== 'undefined') {
            json.priceRequested = this.priceRequested;
        }
        if (typeof this.settledDate !== 'undefined') {
            json.settledDate = this.settledDate.toISOString();
        }
        if (typeof this.lastMatchedDate !== 'undefined') {
            json.lastMatchedDate = this.lastMatchedDate.toISOString();
        }
        if (typeof this.betCount !== 'undefined') {
            json.betCount = this.betCount;
        }
        if (typeof this.commission !== 'undefined') {
            json.commission = this.commission;
        }
        if (typeof this.priceMatched !== 'undefined') {
            json.priceMatched = this.priceMatched;
        }
        if (typeof this.priceReduced !== 'undefined') {
            json.priceReduced = this.priceReduced;
        }
        if (typeof this.sizeSettled !== 'undefined') {
            json.sizeSettled = this.sizeSettled;
        }
        if (typeof this.profit !== 'undefined') {
            json.profit = this.profit;
        }
        if (typeof this.sizeCancelled !== 'undefined') {
            json.sizeCancelled = this.sizeCancelled;
        }
        if (typeof this.customerOrderRef !== 'undefined') {
            json.customerOrderRef = this.customerOrderRef;
        }
        if (typeof this.customerStrategyRef !== 'undefined') {
            json.customerStrategyRef = this.customerStrategyRef;
        }
        return json;
    }

    public getEventTypeId(): string | undefined {
        return this.eventTypeId;
    }
    public setEventTypeId(eventTypeId: string): void {
        this.eventTypeId = eventTypeId;
    }
    public getEventId(): string | undefined {
        return this.eventId;
    }
    public setEventId(eventId: string): void {
        this.eventId = eventId;
    }
    public getMarketId(): string | undefined {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getSelectionId(): number | undefined {
        return this.selectionId;
    }
    public setSelectionId(selectionId: number): void {
        this.selectionId = selectionId;
    }
    public getHandicap(): number | undefined {
        return this.handicap;
    }
    public setHandicap(handicap: number): void {
        this.handicap = handicap;
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
    public getPersistenceType(): PersistenceType | undefined {
        return this.persistenceType;
    }
    public setPersistenceType(persistenceType: PersistenceType): void {
        this.persistenceType = persistenceType;
    }
    public getOrderType(): OrderType | undefined {
        return this.orderType;
    }
    public setOrderType(orderType: OrderType): void {
        this.orderType = orderType;
    }
    public getSide(): Side | undefined {
        return this.side;
    }
    public setSide(side: Side): void {
        this.side = side;
    }
    public getItemDescription(): ItemDescription | undefined {
        return this.itemDescription;
    }
    public setItemDescription(itemDescription: ItemDescription): void {
        this.itemDescription = itemDescription;
    }
    public getBetOutcome(): string | undefined {
        return this.betOutcome;
    }
    public setBetOutcome(betOutcome: string): void {
        this.betOutcome = betOutcome;
    }
    public getPriceRequested(): number | undefined {
        return this.priceRequested;
    }
    public setPriceRequested(priceRequested: number): void {
        this.priceRequested = priceRequested;
    }
    public getSettledDate(): Date | undefined {
        return this.settledDate;
    }
    public setSettledDate(settledDate: Date): void {
        this.settledDate = settledDate;
    }
    public getLastMatchedDate(): Date | undefined {
        return this.lastMatchedDate;
    }
    public setLastMatchedDate(lastMatchedDate: Date): void {
        this.lastMatchedDate = lastMatchedDate;
    }
    public getBetCount(): number | undefined {
        return this.betCount;
    }
    public setBetCount(betCount: number): void {
        this.betCount = betCount;
    }
    public getCommission(): number | undefined {
        return this.commission;
    }
    public setCommission(commission: number): void {
        this.commission = commission;
    }
    public getPriceMatched(): number | undefined {
        return this.priceMatched;
    }
    public setPriceMatched(priceMatched: number): void {
        this.priceMatched = priceMatched;
    }
    public getPriceReduced(): boolean | undefined {
        return this.priceReduced;
    }
    public setPriceReduced(priceReduced: boolean): void {
        this.priceReduced = priceReduced;
    }
    public getSizeSettled(): number | undefined {
        return this.sizeSettled;
    }
    public setSizeSettled(sizeSettled: number): void {
        this.sizeSettled = sizeSettled;
    }
    public getProfit(): number | undefined {
        return this.profit;
    }
    public setProfit(profit: number): void {
        this.profit = profit;
    }
    public getSizeCancelled(): number | undefined {
        return this.sizeCancelled;
    }
    public setSizeCancelled(sizeCancelled: number): void {
        this.sizeCancelled = sizeCancelled;
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
