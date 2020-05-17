/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import OrderType from '../sport/enum/OrderType';
import Side from '../sport/enum/Side';
import LimitOnCloseOrder, { ILimitOnCloseOrderOptions } from '../sport/LimitOnCloseOrder';
import LimitOrder, { ILimitOrderOptions } from '../sport/LimitOrder';
import MarketOnCloseOrder, { IMarketOnCloseOrderOptions } from '../sport/MarketOnCloseOrder';

export interface IPlaceInstructionOptions {
    orderType: OrderType | string;
    selectionId: number;
    handicap?: number;
    side: Side | string;
    limitOrder?: LimitOrder | ILimitOrderOptions;
    limitOnCloseOrder?: LimitOnCloseOrder | ILimitOnCloseOrderOptions;
    marketOnCloseOrder?: MarketOnCloseOrder | IMarketOnCloseOrderOptions;
    customerOrderRef?: string;
}

export default class PlaceInstruction extends JsonMember {
    private orderType: OrderType;
    private selectionId: number;
    private handicap?: number;
    private side: Side;
    private limitOrder?: LimitOrder;
    private limitOnCloseOrder?: LimitOnCloseOrder;
    private marketOnCloseOrder?: MarketOnCloseOrder;
    private customerOrderRef?: string;

    constructor(options: IPlaceInstructionOptions) {
        super();
        this.orderType = this.fromJson(options.orderType, OrderType);
        this.selectionId = options.selectionId;
        this.handicap = options.handicap;
        this.side = this.fromJson(options.side, Side);
        this.limitOrder = options.limitOrder && this.fromJson(options.limitOrder, LimitOrder);
        this.limitOnCloseOrder = options.limitOnCloseOrder && this.fromJson(options.limitOnCloseOrder, LimitOnCloseOrder);
        this.marketOnCloseOrder = options.marketOnCloseOrder && this.fromJson(options.marketOnCloseOrder, MarketOnCloseOrder);
        this.customerOrderRef = options.customerOrderRef;
    }

    public toJson(): IPlaceInstructionOptions {
        const json: IPlaceInstructionOptions = {
            orderType: this.orderType.getValue(),
            selectionId: this.selectionId,
            side: this.side.getValue(),
        };
        if (typeof this.handicap !== 'undefined') {
            json.handicap = this.handicap;
        }
        if (this.limitOrder) {
            json.limitOrder = this.limitOrder.toJson();
        }
        if (this.limitOnCloseOrder) {
            json.limitOnCloseOrder = this.limitOnCloseOrder.toJson();
        }
        if (this.marketOnCloseOrder) {
            json.marketOnCloseOrder = this.marketOnCloseOrder.toJson();
        }
        if (typeof this.customerOrderRef !== 'undefined') {
            json.customerOrderRef = this.customerOrderRef;
        }
        return json;
    }

    public getOrderType(): OrderType {
        return this.orderType;
    }
    public setOrderType(orderType: OrderType): void {
        this.orderType = orderType;
    }
    public getSelectionId(): number {
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
    public getSide(): Side {
        return this.side;
    }
    public setSide(side: Side): void {
        this.side = side;
    }
    public getLimitOrder(): LimitOrder | undefined {
        return this.limitOrder;
    }
    public setLimitOrder(limitOrder: LimitOrder): void {
        this.limitOrder = limitOrder;
    }
    public getLimitOnCloseOrder(): LimitOnCloseOrder | undefined {
        return this.limitOnCloseOrder;
    }
    public setLimitOnCloseOrder(limitOnCloseOrder: LimitOnCloseOrder): void {
        this.limitOnCloseOrder = limitOnCloseOrder;
    }
    public getMarketOnCloseOrder(): MarketOnCloseOrder | undefined {
        return this.marketOnCloseOrder;
    }
    public setMarketOnCloseOrder(marketOnCloseOrder: MarketOnCloseOrder): void {
        this.marketOnCloseOrder = marketOnCloseOrder;
    }
    public getCustomerOrderRef(): string | undefined {
        return this.customerOrderRef;
    }
    public setCustomerOrderRef(customerOrderRef: string): void {
        this.customerOrderRef = customerOrderRef;
    }

}
