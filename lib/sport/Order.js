"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const OrderStatus_1 = require("../sport/enum/OrderStatus");
const OrderType_1 = require("../sport/enum/OrderType");
const PersistenceType_1 = require("../sport/enum/PersistenceType");
const Side_1 = require("../sport/enum/Side");
class Order extends JsonMember_1.default {
    constructor(betId = '', orderType = new OrderType_1.default(), status = new OrderStatus_1.default(), persistenceType = new PersistenceType_1.default(), side = new Side_1.default(), price = null, size = null, bspLiability = null, placedDate = null, avgPriceMatched = null, sizeMatched = null, sizeRemaining = null, sizeLapsed = null, sizeCancelled = null, sizeVoided = null, customerOrderRef = '', customerStrategyRef = '') {
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
    fromJson(json) {
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
    toJson() {
        const json = {};
        if (this.betId !== null) {
            json.betId = this.betId;
        }
        if (this.orderType.isValid()) {
            json.orderType = this.orderType;
        }
        if (this.status.isValid()) {
            json.status = this.status;
        }
        if (this.persistenceType.isValid()) {
            json.persistenceType = this.persistenceType;
        }
        if (this.side.isValid()) {
            json.side = this.side;
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
        if (this.customerOrderRef !== null) {
            json.customerOrderRef = this.customerOrderRef;
        }
        if (this.customerStrategyRef !== null) {
            json.customerStrategyRef = this.customerStrategyRef;
        }
        return json;
    }
    isValid() {
        return this.betId !== null &&
            this.orderType.isValid() &&
            this.status.isValid() &&
            this.persistenceType.isValid() &&
            this.side.isValid() &&
            this.price !== null &&
            this.size !== null &&
            this.bspLiability !== null &&
            this.placedDate !== null;
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
