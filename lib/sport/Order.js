"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const OrderStatus_1 = require("../sport/enum/OrderStatus");
const OrderType_1 = require("../sport/enum/OrderType");
const PersistenceType_1 = require("../sport/enum/PersistenceType");
const Side_1 = require("../sport/enum/Side");
class Order extends JsonMember_1.default {
    constructor(options) {
        super();
        this.betId = options.betId;
        this.orderType = this.fromJson(options.orderType, OrderType_1.default);
        this.status = this.fromJson(options.status, OrderStatus_1.default);
        this.persistenceType = this.fromJson(options.persistenceType, PersistenceType_1.default);
        this.side = this.fromJson(options.side, Side_1.default);
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
    toJson() {
        const json = {
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
    getBetId() {
        return this.betId;
    }
    setBetId(betId) {
        this.betId = betId;
    }
    getOrderType() {
        return this.orderType;
    }
    setOrderType(orderType) {
        this.orderType = orderType;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getPersistenceType() {
        return this.persistenceType;
    }
    setPersistenceType(persistenceType) {
        this.persistenceType = persistenceType;
    }
    getSide() {
        return this.side;
    }
    setSide(side) {
        this.side = side;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getSize() {
        return this.size;
    }
    setSize(size) {
        this.size = size;
    }
    getBspLiability() {
        return this.bspLiability;
    }
    setBspLiability(bspLiability) {
        this.bspLiability = bspLiability;
    }
    getPlacedDate() {
        return this.placedDate;
    }
    setPlacedDate(placedDate) {
        this.placedDate = placedDate;
    }
    getAvgPriceMatched() {
        return this.avgPriceMatched;
    }
    setAvgPriceMatched(avgPriceMatched) {
        this.avgPriceMatched = avgPriceMatched;
    }
    getSizeMatched() {
        return this.sizeMatched;
    }
    setSizeMatched(sizeMatched) {
        this.sizeMatched = sizeMatched;
    }
    getSizeRemaining() {
        return this.sizeRemaining;
    }
    setSizeRemaining(sizeRemaining) {
        this.sizeRemaining = sizeRemaining;
    }
    getSizeLapsed() {
        return this.sizeLapsed;
    }
    setSizeLapsed(sizeLapsed) {
        this.sizeLapsed = sizeLapsed;
    }
    getSizeCancelled() {
        return this.sizeCancelled;
    }
    setSizeCancelled(sizeCancelled) {
        this.sizeCancelled = sizeCancelled;
    }
    getSizeVoided() {
        return this.sizeVoided;
    }
    setSizeVoided(sizeVoided) {
        this.sizeVoided = sizeVoided;
    }
    getCustomerOrderRef() {
        return this.customerOrderRef;
    }
    setCustomerOrderRef(customerOrderRef) {
        this.customerOrderRef = customerOrderRef;
    }
    getCustomerStrategyRef() {
        return this.customerStrategyRef;
    }
    setCustomerStrategyRef(customerStrategyRef) {
        this.customerStrategyRef = customerStrategyRef;
    }
}
exports.default = Order;
//# sourceMappingURL=Order.js.map