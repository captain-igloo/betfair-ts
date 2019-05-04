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
    private orderType;
    private selectionId;
    private handicap;
    private side;
    private limitOrder;
    private limitOnCloseOrder;
    private marketOnCloseOrder;
    private customerOrderRef;
    constructor(orderType?: OrderType, selectionId?: number | null, handicap?: number | null, side?: Side, limitOrder?: LimitOrder, limitOnCloseOrder?: LimitOnCloseOrder, marketOnCloseOrder?: MarketOnCloseOrder, customerOrderRef?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getOrderType(): OrderType;
    setOrderType(orderType: OrderType): void;
    getSelectionId(): number | null;
    setSelectionId(selectionId: number | null): void;
    getHandicap(): number | null;
    setHandicap(handicap: number | null): void;
    getSide(): Side;
    setSide(side: Side): void;
    getLimitOrder(): LimitOrder;
    setLimitOrder(limitOrder: LimitOrder): void;
    getLimitOnCloseOrder(): LimitOnCloseOrder;
    setLimitOnCloseOrder(limitOnCloseOrder: LimitOnCloseOrder): void;
    getMarketOnCloseOrder(): MarketOnCloseOrder;
    setMarketOnCloseOrder(marketOnCloseOrder: MarketOnCloseOrder): void;
    getCustomerOrderRef(): string;
    setCustomerOrderRef(customerOrderRef: string): void;
}
