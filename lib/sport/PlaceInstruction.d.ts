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
    private orderType;
    private selectionId;
    private handicap?;
    private side;
    private limitOrder?;
    private limitOnCloseOrder?;
    private marketOnCloseOrder?;
    private customerOrderRef?;
    constructor(options: IPlaceInstructionOptions);
    toJson(): IPlaceInstructionOptions;
    getOrderType(): OrderType;
    setOrderType(orderType: OrderType): void;
    getSelectionId(): number;
    setSelectionId(selectionId: number): void;
    getHandicap(): number | undefined;
    setHandicap(handicap: number): void;
    getSide(): Side;
    setSide(side: Side): void;
    getLimitOrder(): LimitOrder | undefined;
    setLimitOrder(limitOrder: LimitOrder): void;
    getLimitOnCloseOrder(): LimitOnCloseOrder | undefined;
    setLimitOnCloseOrder(limitOnCloseOrder: LimitOnCloseOrder): void;
    getMarketOnCloseOrder(): MarketOnCloseOrder | undefined;
    setMarketOnCloseOrder(marketOnCloseOrder: MarketOnCloseOrder): void;
    getCustomerOrderRef(): string | undefined;
    setCustomerOrderRef(customerOrderRef: string): void;
}
