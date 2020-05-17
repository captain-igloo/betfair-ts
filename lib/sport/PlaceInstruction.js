"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const OrderType_1 = require("../sport/enum/OrderType");
const Side_1 = require("../sport/enum/Side");
const LimitOnCloseOrder_1 = require("../sport/LimitOnCloseOrder");
const LimitOrder_1 = require("../sport/LimitOrder");
const MarketOnCloseOrder_1 = require("../sport/MarketOnCloseOrder");
class PlaceInstruction extends JsonMember_1.default {
    constructor(options) {
        super();
        this.orderType = this.fromJson(options.orderType, OrderType_1.default);
        this.selectionId = options.selectionId;
        this.handicap = options.handicap;
        this.side = this.fromJson(options.side, Side_1.default);
        this.limitOrder = options.limitOrder && this.fromJson(options.limitOrder, LimitOrder_1.default);
        this.limitOnCloseOrder = options.limitOnCloseOrder && this.fromJson(options.limitOnCloseOrder, LimitOnCloseOrder_1.default);
        this.marketOnCloseOrder = options.marketOnCloseOrder && this.fromJson(options.marketOnCloseOrder, MarketOnCloseOrder_1.default);
        this.customerOrderRef = options.customerOrderRef;
    }
    toJson() {
        const json = {
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
    getOrderType() {
        return this.orderType;
    }
    setOrderType(orderType) {
        this.orderType = orderType;
    }
    getSelectionId() {
        return this.selectionId;
    }
    setSelectionId(selectionId) {
        this.selectionId = selectionId;
    }
    getHandicap() {
        return this.handicap;
    }
    setHandicap(handicap) {
        this.handicap = handicap;
    }
    getSide() {
        return this.side;
    }
    setSide(side) {
        this.side = side;
    }
    getLimitOrder() {
        return this.limitOrder;
    }
    setLimitOrder(limitOrder) {
        this.limitOrder = limitOrder;
    }
    getLimitOnCloseOrder() {
        return this.limitOnCloseOrder;
    }
    setLimitOnCloseOrder(limitOnCloseOrder) {
        this.limitOnCloseOrder = limitOnCloseOrder;
    }
    getMarketOnCloseOrder() {
        return this.marketOnCloseOrder;
    }
    setMarketOnCloseOrder(marketOnCloseOrder) {
        this.marketOnCloseOrder = marketOnCloseOrder;
    }
    getCustomerOrderRef() {
        return this.customerOrderRef;
    }
    setCustomerOrderRef(customerOrderRef) {
        this.customerOrderRef = customerOrderRef;
    }
}
exports.default = PlaceInstruction;
//# sourceMappingURL=PlaceInstruction.js.map