"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const OrderType_1 = require("../sport/enum/OrderType");
const Side_1 = require("../sport/enum/Side");
const LimitOrder_1 = require("../sport/LimitOrder");
const LimitOnCloseOrder_1 = require("../sport/LimitOnCloseOrder");
const MarketOnCloseOrder_1 = require("../sport/MarketOnCloseOrder");
class PlaceInstruction extends JsonMember_1.default {
    constructor(orderType = new OrderType_1.default(), selectionId = null, handicap = null, side = new Side_1.default(), limitOrder = new LimitOrder_1.default(), limitOnCloseOrder = new LimitOnCloseOrder_1.default(), marketOnCloseOrder = new MarketOnCloseOrder_1.default(), customerOrderRef = '') {
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
    fromJson(json) {
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
    toJson() {
        const json = {};
        if (this.orderType.isValid()) {
            json.orderType = this.orderType;
        }
        if (this.selectionId !== null) {
            json.selectionId = this.selectionId;
        }
        if (this.handicap !== null) {
            json.handicap = this.handicap;
        }
        if (this.side.isValid()) {
            json.side = this.side;
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
        if (this.customerOrderRef !== null) {
            json.customerOrderRef = this.customerOrderRef;
        }
        return json;
    }
    isValid() {
        return this.orderType.isValid() &&
            this.selectionId !== null &&
            this.side.isValid();
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
