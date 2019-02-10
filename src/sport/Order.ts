/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import OrderStatus from '../sport/enum/OrderStatus';
import OrderType from '../sport/enum/OrderType';
import PersistenceType from '../sport/enum/PersistenceType';
import Side from '../sport/enum/Side';

export default class Order extends JsonMember {
    private betId: string;
    private orderType: OrderType;
    private status: OrderStatus;
    private persistenceType: PersistenceType;
    private side: Side;
    private price: number | null;
    private size: number | null;
    private bspLiability: number | null;
    private placedDate: Date | null;
    private avgPriceMatched: number | null;
    private sizeMatched: number | null;
    private sizeRemaining: number | null;
    private sizeLapsed: number | null;
    private sizeCancelled: number | null;
    private sizeVoided: number | null;
    private customerOrderRef: string;
    private customerStrategyRef: string;

    constructor(
        betId: string = '',
        orderType: OrderType = new OrderType(),
        status: OrderStatus = new OrderStatus(),
        persistenceType: PersistenceType = new PersistenceType(),
        side: Side = new Side(),
        price: number | null = null,
        size: number | null = null,
        bspLiability: number | null = null,
        placedDate: Date | null = null,
        avgPriceMatched: number | null = null,
        sizeMatched: number | null = null,
        sizeRemaining: number | null = null,
        sizeLapsed: number | null = null,
        sizeCancelled: number | null = null,
        sizeVoided: number | null = null,
        customerOrderRef: string = '',
        customerStrategyRef: string = '',
    ) {
        super();
        this.betId = betId;
        this.orderType = orderType;
        this.status = status;
        this.persistenceType = persistenceType;
        this.side = side;
        this.price = price;
        this.size = size;
        this.bspLiability = bspLiability;
        this.placedDate = placedDate;
        this.avgPriceMatched = avgPriceMatched;
        this.sizeMatched = sizeMatched;
        this.sizeRemaining = sizeRemaining;
        this.sizeLapsed = sizeLapsed;
        this.sizeCancelled = sizeCancelled;
        this.sizeVoided = sizeVoided;
        this.customerOrderRef = customerOrderRef;
        this.customerStrategyRef = customerStrategyRef;
    }

    public fromJson(json: any): void {
        if ('betId' in json) {
            this.betId = json.betId;
        }
        if ('orderType' in json) {
            this.orderType.setValue(json.orderType);
        }
        if ('status' in json) {
            this.status.setValue(json.status);
        }
        if ('persistenceType' in json) {
            this.persistenceType.setValue(json.persistenceType);
        }
        if ('side' in json) {
            this.side.setValue(json.side);
        }
        if ('price' in json) {
            this.price = json.price;
        }
        if ('size' in json) {
            this.size = json.size;
        }
        if ('bspLiability' in json) {
            this.bspLiability = json.bspLiability;
        }
        if ('placedDate' in json) {
            this.placedDate = new Date(json.placedDate);
        }
        if ('avgPriceMatched' in json) {
            this.avgPriceMatched = json.avgPriceMatched;
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
        if (this.orderType.isValid()) {
            json.orderType = this.orderType.getValue();
        }
        if (this.status.isValid()) {
            json.status = this.status.getValue();
        }
        if (this.persistenceType.isValid()) {
            json.persistenceType = this.persistenceType.getValue();
        }
        if (this.side.isValid()) {
            json.side = this.side.getValue();
        }
        if (this.price !== null) {
            json.price = this.price;
        }
        if (this.size !== null) {
            json.size = this.size;
        }
        if (this.bspLiability !== null) {
            json.bspLiability = this.bspLiability;
        }
        if (this.placedDate !== null) {
            json.placedDate = this.placedDate.toISOString();
        }
        if (this.avgPriceMatched !== null) {
            json.avgPriceMatched = this.avgPriceMatched;
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
            this.orderType.isValid() &&
            this.status.isValid() &&
            this.persistenceType.isValid() &&
            this.side.isValid() &&
            this.price !== null &&
            this.size !== null &&
            this.bspLiability !== null &&
            this.placedDate !== null;
    }

    public getBetId(): string {
        return this.betId;
    }
    public setBetId(betId: string): void {
        this.betId = betId;
    }
    public getOrderType(): OrderType {
        return this.orderType;
    }
    public setOrderType(orderType: OrderType): void {
        this.orderType = orderType;
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
    public getSide(): Side {
        return this.side;
    }
    public setSide(side: Side): void {
        this.side = side;
    }
    public getPrice(): number | null {
        return this.price;
    }
    public setPrice(price: number | null): void {
        this.price = price;
    }
    public getSize(): number | null {
        return this.size;
    }
    public setSize(size: number | null): void {
        this.size = size;
    }
    public getBspLiability(): number | null {
        return this.bspLiability;
    }
    public setBspLiability(bspLiability: number | null): void {
        this.bspLiability = bspLiability;
    }
    public getPlacedDate(): Date | null {
        return this.placedDate;
    }
    public setPlacedDate(placedDate: Date | null): void {
        this.placedDate = placedDate;
    }
    public getAvgPriceMatched(): number | null {
        return this.avgPriceMatched;
    }
    public setAvgPriceMatched(avgPriceMatched: number | null): void {
        this.avgPriceMatched = avgPriceMatched;
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
