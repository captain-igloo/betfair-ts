/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import OrderStatus from '../sport/enum/OrderStatus';
import OrderType from '../sport/enum/OrderType';
import PersistenceType from '../sport/enum/PersistenceType';
import Side from '../sport/enum/Side';
import PriceSize from '../sport/PriceSize';

export default class CurrentOrderSummary extends JsonMember {
    private betId: string;
    private marketId: string;
    private selectionId: number | null;
    private handicap: number | null;
    private priceSize: PriceSize;
    private bspLiability: number | null;
    private side: Side;
    private status: OrderStatus;
    private persistenceType: PersistenceType;
    private orderType: OrderType;
    private placedDate: Date | null;
    private matchedDate: Date | null;
    private averagePriceMatched: number | null;
    private sizeMatched: number | null;
    private sizeRemaining: number | null;
    private sizeLapsed: number | null;
    private sizeCancelled: number | null;
    private sizeVoided: number | null;
    private regulatorAuthCode: string;
    private regulatorCode: string;
    private customerOrderRef: string;
    private customerStrategyRef: string;

    constructor(
        betId: string = '',
        marketId: string = '',
        selectionId: number | null = null,
        handicap: number | null = null,
        priceSize: PriceSize = new PriceSize(),
        bspLiability: number | null = null,
        side: Side = new Side(),
        status: OrderStatus = new OrderStatus(),
        persistenceType: PersistenceType = new PersistenceType(),
        orderType: OrderType = new OrderType(),
        placedDate: Date | null = null,
        matchedDate: Date | null = null,
        averagePriceMatched: number | null = null,
        sizeMatched: number | null = null,
        sizeRemaining: number | null = null,
        sizeLapsed: number | null = null,
        sizeCancelled: number | null = null,
        sizeVoided: number | null = null,
        regulatorAuthCode: string = '',
        regulatorCode: string = '',
        customerOrderRef: string = '',
        customerStrategyRef: string = '',
    ) {
        super();
        this.betId = betId;
        this.marketId = marketId;
        this.selectionId = selectionId;
        this.handicap = handicap;
        this.priceSize = priceSize;
        this.bspLiability = bspLiability;
        this.side = side;
        this.status = status;
        this.persistenceType = persistenceType;
        this.orderType = orderType;
        this.placedDate = placedDate;
        this.matchedDate = matchedDate;
        this.averagePriceMatched = averagePriceMatched;
        this.sizeMatched = sizeMatched;
        this.sizeRemaining = sizeRemaining;
        this.sizeLapsed = sizeLapsed;
        this.sizeCancelled = sizeCancelled;
        this.sizeVoided = sizeVoided;
        this.regulatorAuthCode = regulatorAuthCode;
        this.regulatorCode = regulatorCode;
        this.customerOrderRef = customerOrderRef;
        this.customerStrategyRef = customerStrategyRef;
    }

    public fromJson(json: any): void {
        if ('betId' in json) {
            this.betId = json.betId;
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
        if ('priceSize' in json) {
            this.priceSize.fromJson(json.priceSize);
        }
        if ('bspLiability' in json) {
            this.bspLiability = json.bspLiability;
        }
        if ('side' in json) {
            this.side.setValue(json.side);
        }
        if ('status' in json) {
            this.status.setValue(json.status);
        }
        if ('persistenceType' in json) {
            this.persistenceType.setValue(json.persistenceType);
        }
        if ('orderType' in json) {
            this.orderType.setValue(json.orderType);
        }
        if ('placedDate' in json) {
            this.placedDate = new Date(json.placedDate);
        }
        if ('matchedDate' in json) {
            this.matchedDate = new Date(json.matchedDate);
        }
        if ('averagePriceMatched' in json) {
            this.averagePriceMatched = json.averagePriceMatched;
        }
        if ('sizeMatched' in json) {
            this.sizeMatched = json.sizeMatched;
        }
        if ('sizeRemaining' in json) {
            this.sizeRemaining = json.sizeRemaining;
        }
        if ('sizeLapsed' in json) {
            this.sizeLapsed = json.sizeLapsed;
        }
        if ('sizeCancelled' in json) {
            this.sizeCancelled = json.sizeCancelled;
        }
        if ('sizeVoided' in json) {
            this.sizeVoided = json.sizeVoided;
        }
        if ('regulatorAuthCode' in json) {
            this.regulatorAuthCode = json.regulatorAuthCode;
        }
        if ('regulatorCode' in json) {
            this.regulatorCode = json.regulatorCode;
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
        if (this.betId !== '') {
            json.betId = this.betId;
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
        if (this.priceSize.isValid()) {
            json.priceSize = this.priceSize.toJson();
        }
        if (this.bspLiability !== null) {
            json.bspLiability = this.bspLiability;
        }
        if (this.side.isValid()) {
            json.side = this.side.getValue();
        }
        if (this.status.isValid()) {
            json.status = this.status.getValue();
        }
        if (this.persistenceType.isValid()) {
            json.persistenceType = this.persistenceType.getValue();
        }
        if (this.orderType.isValid()) {
            json.orderType = this.orderType.getValue();
        }
        if (this.placedDate !== null) {
            json.placedDate = this.placedDate.toISOString();
        }
        if (this.matchedDate !== null) {
            json.matchedDate = this.matchedDate.toISOString();
        }
        if (this.averagePriceMatched !== null) {
            json.averagePriceMatched = this.averagePriceMatched;
        }
        if (this.sizeMatched !== null) {
            json.sizeMatched = this.sizeMatched;
        }
        if (this.sizeRemaining !== null) {
            json.sizeRemaining = this.sizeRemaining;
        }
        if (this.sizeLapsed !== null) {
            json.sizeLapsed = this.sizeLapsed;
        }
        if (this.sizeCancelled !== null) {
            json.sizeCancelled = this.sizeCancelled;
        }
        if (this.sizeVoided !== null) {
            json.sizeVoided = this.sizeVoided;
        }
        if (this.regulatorAuthCode !== '') {
            json.regulatorAuthCode = this.regulatorAuthCode;
        }
        if (this.regulatorCode !== '') {
            json.regulatorCode = this.regulatorCode;
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
        return this.betId !== '' &&
            this.marketId !== '' &&
            this.selectionId !== null &&
            this.handicap !== null &&
            this.priceSize.isValid() &&
            this.bspLiability !== null &&
            this.side.isValid() &&
            this.status.isValid() &&
            this.persistenceType.isValid() &&
            this.orderType.isValid() &&
            this.placedDate !== null &&
            this.matchedDate !== null;
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
    public getPriceSize(): PriceSize {
        return this.priceSize;
    }
    public setPriceSize(priceSize: PriceSize): void {
        this.priceSize = priceSize;
    }
    public getBspLiability(): number | null {
        return this.bspLiability;
    }
    public setBspLiability(bspLiability: number | null): void {
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
    public getPlacedDate(): Date | null {
        return this.placedDate;
    }
    public setPlacedDate(placedDate: Date | null): void {
        this.placedDate = placedDate;
    }
    public getMatchedDate(): Date | null {
        return this.matchedDate;
    }
    public setMatchedDate(matchedDate: Date | null): void {
        this.matchedDate = matchedDate;
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
    public getSizeRemaining(): number | null {
        return this.sizeRemaining;
    }
    public setSizeRemaining(sizeRemaining: number | null): void {
        this.sizeRemaining = sizeRemaining;
    }
    public getSizeLapsed(): number | null {
        return this.sizeLapsed;
    }
    public setSizeLapsed(sizeLapsed: number | null): void {
        this.sizeLapsed = sizeLapsed;
    }
    public getSizeCancelled(): number | null {
        return this.sizeCancelled;
    }
    public setSizeCancelled(sizeCancelled: number | null): void {
        this.sizeCancelled = sizeCancelled;
    }
    public getSizeVoided(): number | null {
        return this.sizeVoided;
    }
    public setSizeVoided(sizeVoided: number | null): void {
        this.sizeVoided = sizeVoided;
    }
    public getRegulatorAuthCode(): string {
        return this.regulatorAuthCode;
    }
    public setRegulatorAuthCode(regulatorAuthCode: string): void {
        this.regulatorAuthCode = regulatorAuthCode;
    }
    public getRegulatorCode(): string {
        return this.regulatorCode;
    }
    public setRegulatorCode(regulatorCode: string): void {
        this.regulatorCode = regulatorCode;
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
