/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import OrderStatus from '../sport/enum/OrderStatus';
import OrderType from '../sport/enum/OrderType';
import PersistenceType from '../sport/enum/PersistenceType';
import Side from '../sport/enum/Side';

export interface IOrderOptions {
    betId: string;
    orderType: OrderType | string;
    status: OrderStatus | string;
    persistenceType: PersistenceType | string;
    side: Side | string;
    price: number;
    size: number;
    bspLiability: number;
    placedDate: Date | string;
    avgPriceMatched?: number;
    sizeMatched?: number;
    sizeRemaining?: number;
    sizeLapsed?: number;
    sizeCancelled?: number;
    sizeVoided?: number;
    customerOrderRef?: string;
    customerStrategyRef?: string;
}

export default class Order extends JsonMember {
    private betId: string;
    private orderType: OrderType;
    private status: OrderStatus;
    private persistenceType: PersistenceType;
    private side: Side;
    private price: number;
    private size: number;
    private bspLiability: number;
    private placedDate: Date;
    private avgPriceMatched?: number;
    private sizeMatched?: number;
    private sizeRemaining?: number;
    private sizeLapsed?: number;
    private sizeCancelled?: number;
    private sizeVoided?: number;
    private customerOrderRef?: string;
    private customerStrategyRef?: string;

    constructor(options: IOrderOptions) {
        super();
        this.betId = options.betId;
        this.orderType = this.fromJson(options.orderType, OrderType);
        this.status = this.fromJson(options.status, OrderStatus);
        this.persistenceType = this.fromJson(options.persistenceType, PersistenceType);
        this.side = this.fromJson(options.side, Side);
        this.price = options.price;
        this.size = options.size;
        this.bspLiability = options.bspLiability;
        this.placedDate = this.fromJson(options.placedDate, Date);
        this.avgPriceMatched = options.avgPriceMatched;
        this.sizeMatched = options.sizeMatched;
        this.sizeRemaining = options.sizeRemaining;
        this.sizeLapsed = options.sizeLapsed;
        this.sizeCancelled = options.sizeCancelled;
        this.sizeVoided = options.sizeVoided;
        this.customerOrderRef = options.customerOrderRef;
        this.customerStrategyRef = options.customerStrategyRef;
    }

    public toJson(): IOrderOptions {
        const json: IOrderOptions = {
            betId: this.betId,
            orderType: this.orderType.getValue(),
            status: this.status.getValue(),
            persistenceType: this.persistenceType.getValue(),
            side: this.side.getValue(),
            price: this.price,
            size: this.size,
            bspLiability: this.bspLiability,
            placedDate: this.placedDate.toISOString(),
        };
        if (typeof this.avgPriceMatched !== 'undefined') {
            json.avgPriceMatched = this.avgPriceMatched;
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
    public getPrice(): number {
        return this.price;
    }
    public setPrice(price: number): void {
        this.price = price;
    }
    public getSize(): number {
        return this.size;
    }
    public setSize(size: number): void {
        this.size = size;
    }
    public getBspLiability(): number {
        return this.bspLiability;
    }
    public setBspLiability(bspLiability: number): void {
        this.bspLiability = bspLiability;
    }
    public getPlacedDate(): Date {
        return this.placedDate;
    }
    public setPlacedDate(placedDate: Date): void {
        this.placedDate = placedDate;
    }
    public getAvgPriceMatched(): number | undefined {
        return this.avgPriceMatched;
    }
    public setAvgPriceMatched(avgPriceMatched: number): void {
        this.avgPriceMatched = avgPriceMatched;
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
