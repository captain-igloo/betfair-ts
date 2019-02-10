/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import OrderType from '../sport/enum/OrderType';
import PersistenceType from '../sport/enum/PersistenceType';
import Side from '../sport/enum/Side';
import ItemDescription from '../sport/ItemDescription';

export default class ClearedOrderSummary extends JsonMember {
    private eventTypeId: string;
    private eventId: string;
    private marketId: string;
    private selectionId: number | null;
    private handicap: number | null;
    private betId: string;
    private placedDate: Date | null;
    private persistenceType: PersistenceType;
    private orderType: OrderType;
    private side: Side;
    private itemDescription: ItemDescription;
    private betOutcome: string;
    private priceRequested: number | null;
    private settledDate: Date | null;
    private lastMatchedDate: Date | null;
    private betCount: number | null;
    private commission: number | null;
    private priceMatched: number | null;
    private priceReduced: boolean | null;
    private sizeSettled: number | null;
    private profit: number | null;
    private sizeCancelled: number | null;
    private customerOrderRef: string;
    private customerStrategyRef: string;

    constructor(
        eventTypeId: string = '',
        eventId: string = '',
        marketId: string = '',
        selectionId: number | null = null,
        handicap: number | null = null,
        betId: string = '',
        placedDate: Date | null = null,
        persistenceType: PersistenceType = new PersistenceType(),
        orderType: OrderType = new OrderType(),
        side: Side = new Side(),
        itemDescription: ItemDescription = new ItemDescription(),
        betOutcome: string = '',
        priceRequested: number | null = null,
        settledDate: Date | null = null,
        lastMatchedDate: Date | null = null,
        betCount: number | null = null,
        commission: number | null = null,
        priceMatched: number | null = null,
        priceReduced: boolean | null = null,
        sizeSettled: number | null = null,
        profit: number | null = null,
        sizeCancelled: number | null = null,
        customerOrderRef: string = '',
        customerStrategyRef: string = '',
    ) {
        super();
        this.eventTypeId = eventTypeId;
        this.eventId = eventId;
        this.marketId = marketId;
        this.selectionId = selectionId;
        this.handicap = handicap;
        this.betId = betId;
        this.placedDate = placedDate;
        this.persistenceType = persistenceType;
        this.orderType = orderType;
        this.side = side;
        this.itemDescription = itemDescription;
        this.betOutcome = betOutcome;
        this.priceRequested = priceRequested;
        this.settledDate = settledDate;
        this.lastMatchedDate = lastMatchedDate;
        this.betCount = betCount;
        this.commission = commission;
        this.priceMatched = priceMatched;
        this.priceReduced = priceReduced;
        this.sizeSettled = sizeSettled;
        this.profit = profit;
        this.sizeCancelled = sizeCancelled;
        this.customerOrderRef = customerOrderRef;
        this.customerStrategyRef = customerStrategyRef;
    }

    public fromJson(json: any): void {
        if ('eventTypeId' in json) {
            this.eventTypeId = json.eventTypeId;
        }
        if ('eventId' in json) {
            this.eventId = json.eventId;
        }
        if ('marketId' in json) {
            this.marketId = json.marketId;
        }
        if ('selectionId' in json) {
            this.selectionId = json.selectionId;
        }
        if ('handicap' in json) {
            this.handicap = json.handicap;
        }
        if ('betId' in json) {
            this.betId = json.betId;
        }
        if ('placedDate' in json) {
            this.placedDate = new Date(json.placedDate);
        }
        if ('persistenceType' in json) {
            this.persistenceType.setValue(json.persistenceType);
        }
        if ('orderType' in json) {
            this.orderType.setValue(json.orderType);
        }
        if ('side' in json) {
            this.side.setValue(json.side);
        }
        if ('itemDescription' in json) {
            this.itemDescription.fromJson(json.itemDescription);
        }
        if ('betOutcome' in json) {
            this.betOutcome = json.betOutcome;
        }
        if ('priceRequested' in json) {
            this.priceRequested = json.priceRequested;
        }
        if ('settledDate' in json) {
            this.settledDate = new Date(json.settledDate);
        }
        if ('lastMatchedDate' in json) {
            this.lastMatchedDate = new Date(json.lastMatchedDate);
        }
        if ('betCount' in json) {
            this.betCount = json.betCount;
        }
        if ('commission' in json) {
            this.commission = json.commission;
        }
        if ('priceMatched' in json) {
            this.priceMatched = json.priceMatched;
        }
        if ('priceReduced' in json) {
            this.priceReduced = json.priceReduced;
        }
        if ('sizeSettled' in json) {
            this.sizeSettled = json.sizeSettled;
        }
        if ('profit' in json) {
            this.profit = json.profit;
        }
        if ('sizeCancelled' in json) {
            this.sizeCancelled = json.sizeCancelled;
        }
        if ('customerOrderRef' in json) {
            this.customerOrderRef = json.customerOrderRef;
        }
        if ('customerStrategyRef' in json) {
            this.customerStrategyRef = json.customerStrategyRef;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.eventTypeId !== '') {
            json.eventTypeId = this.eventTypeId;
        }
        if (this.eventId !== '') {
            json.eventId = this.eventId;
        }
        if (this.marketId !== '') {
            json.marketId = this.marketId;
        }
        if (this.selectionId !== null) {
            json.selectionId = this.selectionId;
        }
        if (this.handicap !== null) {
            json.handicap = this.handicap;
        }
        if (this.betId !== '') {
            json.betId = this.betId;
        }
        if (this.placedDate !== null) {
            json.placedDate = this.placedDate.toISOString();
        }
        if (this.persistenceType.isValid()) {
            json.persistenceType = this.persistenceType.getValue();
        }
        if (this.orderType.isValid()) {
            json.orderType = this.orderType.getValue();
        }
        if (this.side.isValid()) {
            json.side = this.side.getValue();
        }
        if (this.itemDescription.isValid()) {
            json.itemDescription = this.itemDescription.toJson();
        }
        if (this.betOutcome !== '') {
            json.betOutcome = this.betOutcome;
        }
        if (this.priceRequested !== null) {
            json.priceRequested = this.priceRequested;
        }
        if (this.settledDate !== null) {
            json.settledDate = this.settledDate.toISOString();
        }
        if (this.lastMatchedDate !== null) {
            json.lastMatchedDate = this.lastMatchedDate.toISOString();
        }
        if (this.betCount !== null) {
            json.betCount = this.betCount;
        }
        if (this.commission !== null) {
            json.commission = this.commission;
        }
        if (this.priceMatched !== null) {
            json.priceMatched = this.priceMatched;
        }
        if (this.priceReduced !== null) {
            json.priceReduced = this.priceReduced;
        }
        if (this.sizeSettled !== null) {
            json.sizeSettled = this.sizeSettled;
        }
        if (this.profit !== null) {
            json.profit = this.profit;
        }
        if (this.sizeCancelled !== null) {
            json.sizeCancelled = this.sizeCancelled;
        }
        if (this.customerOrderRef !== '') {
            json.customerOrderRef = this.customerOrderRef;
        }
        if (this.customerStrategyRef !== '') {
            json.customerStrategyRef = this.customerStrategyRef;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getEventTypeId(): string {
        return this.eventTypeId;
    }
    public setEventTypeId(eventTypeId: string): void {
        this.eventTypeId = eventTypeId;
    }
    public getEventId(): string {
        return this.eventId;
    }
    public setEventId(eventId: string): void {
        this.eventId = eventId;
    }
    public getMarketId(): string {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getSelectionId(): number | null {
        return this.selectionId;
    }
    public setSelectionId(selectionId: number | null): void {
        this.selectionId = selectionId;
    }
    public getHandicap(): number | null {
        return this.handicap;
    }
    public setHandicap(handicap: number | null): void {
        this.handicap = handicap;
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
    public getSide(): Side {
        return this.side;
    }
    public setSide(side: Side): void {
        this.side = side;
    }
    public getItemDescription(): ItemDescription {
        return this.itemDescription;
    }
    public setItemDescription(itemDescription: ItemDescription): void {
        this.itemDescription = itemDescription;
    }
    public getBetOutcome(): string {
        return this.betOutcome;
    }
    public setBetOutcome(betOutcome: string): void {
        this.betOutcome = betOutcome;
    }
    public getPriceRequested(): number | null {
        return this.priceRequested;
    }
    public setPriceRequested(priceRequested: number | null): void {
        this.priceRequested = priceRequested;
    }
    public getSettledDate(): Date | null {
        return this.settledDate;
    }
    public setSettledDate(settledDate: Date | null): void {
        this.settledDate = settledDate;
    }
    public getLastMatchedDate(): Date | null {
        return this.lastMatchedDate;
    }
    public setLastMatchedDate(lastMatchedDate: Date | null): void {
        this.lastMatchedDate = lastMatchedDate;
    }
    public getBetCount(): number | null {
        return this.betCount;
    }
    public setBetCount(betCount: number | null): void {
        this.betCount = betCount;
    }
    public getCommission(): number | null {
        return this.commission;
    }
    public setCommission(commission: number | null): void {
        this.commission = commission;
    }
    public getPriceMatched(): number | null {
        return this.priceMatched;
    }
    public setPriceMatched(priceMatched: number | null): void {
        this.priceMatched = priceMatched;
    }
    public getPriceReduced(): boolean | null {
        return this.priceReduced;
    }
    public setPriceReduced(priceReduced: boolean | null): void {
        this.priceReduced = priceReduced;
    }
    public getSizeSettled(): number | null {
        return this.sizeSettled;
    }
    public setSizeSettled(sizeSettled: number | null): void {
        this.sizeSettled = sizeSettled;
    }
    public getProfit(): number | null {
        return this.profit;
    }
    public setProfit(profit: number | null): void {
        this.profit = profit;
    }
    public getSizeCancelled(): number | null {
        return this.sizeCancelled;
    }
    public setSizeCancelled(sizeCancelled: number | null): void {
        this.sizeCancelled = sizeCancelled;
    }
    public getCustomerOrderRef(): string {
        return this.customerOrderRef;
    }
    public setCustomerOrderRef(customerOrderRef: string): void {
        this.customerOrderRef = customerOrderRef;
    }
    public getCustomerStrategyRef(): string {
        return this.customerStrategyRef;
    }
    public setCustomerStrategyRef(customerStrategyRef: string): void {
        this.customerStrategyRef = customerStrategyRef;
    }

}
