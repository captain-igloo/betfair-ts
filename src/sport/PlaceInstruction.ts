/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import OrderType from '../sport/enum/OrderType';
import Side from '../sport/enum/Side';
import LimitOnCloseOrder from '../sport/LimitOnCloseOrder';
import LimitOrder from '../sport/LimitOrder';
import MarketOnCloseOrder from '../sport/MarketOnCloseOrder';

export default class PlaceInstruction extends JsonMember {
    private orderType: OrderType;
    private selectionId: number | null;
    private handicap: number | null;
    private side: Side;
    private limitOrder: LimitOrder;
    private limitOnCloseOrder: LimitOnCloseOrder;
    private marketOnCloseOrder: MarketOnCloseOrder;
    private customerOrderRef: string;

    constructor(
        orderType: OrderType = new OrderType(),
        selectionId: number | null = null,
        handicap: number | null = null,
        side: Side = new Side(),
        limitOrder: LimitOrder = new LimitOrder(),
        limitOnCloseOrder: LimitOnCloseOrder = new LimitOnCloseOrder(),
        marketOnCloseOrder: MarketOnCloseOrder = new MarketOnCloseOrder(),
        customerOrderRef: string = '',
    ) {
        super();
        this.orderType = orderType;
        this.selectionId = selectionId;
        this.handicap = handicap;
        this.side = side;
        this.limitOrder = limitOrder;
        this.limitOnCloseOrder = limitOnCloseOrder;
        this.marketOnCloseOrder = marketOnCloseOrder;
        this.customerOrderRef = customerOrderRef;
    }

    public fromJson(json: any): void {
        if ('orderType' in json) {
            this.orderType.setValue(json.orderType);
        }
        if ('selectionId' in json) {
            this.selectionId = json.selectionId;
        }
        if ('handicap' in json) {
            this.handicap = json.handicap;
        }
        if ('side' in json) {
            this.side.setValue(json.side);
        }
        if ('limitOrder' in json) {
            this.limitOrder.fromJson(json.limitOrder);
        }
        if ('limitOnCloseOrder' in json) {
            this.limitOnCloseOrder.fromJson(json.limitOnCloseOrder);
        }
        if ('marketOnCloseOrder' in json) {
            this.marketOnCloseOrder.fromJson(json.marketOnCloseOrder);
        }
        if ('customerOrderRef' in json) {
            this.customerOrderRef = json.customerOrderRef;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.orderType.isValid()) {
            json.orderType = this.orderType.getValue();
        }
        if (this.selectionId !== null) {
            json.selectionId = this.selectionId;
        }
        if (this.handicap !== null) {
            json.handicap = this.handicap;
        }
        if (this.side.isValid()) {
            json.side = this.side.getValue();
        }
        if (this.limitOrder.isValid()) {
            json.limitOrder = this.limitOrder.toJson();
        }
        if (this.limitOnCloseOrder.isValid()) {
            json.limitOnCloseOrder = this.limitOnCloseOrder.toJson();
        }
        if (this.marketOnCloseOrder.isValid()) {
            json.marketOnCloseOrder = this.marketOnCloseOrder.toJson();
        }
        if (this.customerOrderRef !== '') {
            json.customerOrderRef = this.customerOrderRef;
        }
        return json;
    }

    public isValid(): boolean {
        return this.orderType.isValid() &&
            this.selectionId !== null &&
            this.side.isValid();
    }

    public getOrderType(): OrderType {
        return this.orderType;
    }
    public setOrderType(orderType: OrderType): void {
        this.orderType = orderType;
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
    public getSide(): Side {
        return this.side;
    }
    public setSide(side: Side): void {
        this.side = side;
    }
    public getLimitOrder(): LimitOrder {
        return this.limitOrder;
    }
    public setLimitOrder(limitOrder: LimitOrder): void {
        this.limitOrder = limitOrder;
    }
    public getLimitOnCloseOrder(): LimitOnCloseOrder {
        return this.limitOnCloseOrder;
    }
    public setLimitOnCloseOrder(limitOnCloseOrder: LimitOnCloseOrder): void {
        this.limitOnCloseOrder = limitOnCloseOrder;
    }
    public getMarketOnCloseOrder(): MarketOnCloseOrder {
        return this.marketOnCloseOrder;
    }
    public setMarketOnCloseOrder(marketOnCloseOrder: MarketOnCloseOrder): void {
        this.marketOnCloseOrder = marketOnCloseOrder;
    }
    public getCustomerOrderRef(): string {
        return this.customerOrderRef;
    }
    public setCustomerOrderRef(customerOrderRef: string): void {
        this.customerOrderRef = customerOrderRef;
    }

}
