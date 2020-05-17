"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const MatchProjection_1 = require("../sport/enum/MatchProjection");
const OrderProjection_1 = require("../sport/enum/OrderProjection");
const PriceProjection_1 = require("../sport/PriceProjection");
class ListMarketBookRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.marketIds = options.marketIds;
        this.priceProjection = options.priceProjection && this.fromJson(options.priceProjection, PriceProjection_1.default);
        if (options.orderProjection) {
            this.orderProjection = this.fromJson(options.orderProjection, OrderProjection_1.default);
        }
        if (options.matchProjection) {
            this.matchProjection = this.fromJson(options.matchProjection, MatchProjection_1.default);
        }
        this.includeOverallPosition = options.includeOverallPosition;
        this.partitionMatchedByStrategyRef = options.partitionMatchedByStrategyRef;
        this.customerStrategyRefs = options.customerStrategyRefs && this.setFromJson(options.customerStrategyRefs);
        this.currencyCode = options.currencyCode;
        this.locale = options.locale;
        if (options.matchedSince) {
            this.matchedSince = this.fromJson(options.matchedSince, Date);
        }
        this.betIds = options.betIds && this.setFromJson(options.betIds);
    }
    toJson() {
        const json = {
            marketIds: this.marketIds,
        };
        if (this.priceProjection) {
            json.priceProjection = this.priceProjection.toJson();
        }
        if (this.orderProjection) {
            json.orderProjection = this.orderProjection.getValue();
        }
        if (this.matchProjection) {
            json.matchProjection = this.matchProjection.getValue();
        }
        if (typeof this.includeOverallPosition !== 'undefined') {
            json.includeOverallPosition = this.includeOverallPosition;
        }
        if (typeof this.partitionMatchedByStrategyRef !== 'undefined') {
            json.partitionMatchedByStrategyRef = this.partitionMatchedByStrategyRef;
        }
        if (this.customerStrategyRefs && this.customerStrategyRefs.size > 0) {
            json.customerStrategyRefs = this.setToJson(this.customerStrategyRefs);
        }
        if (typeof this.currencyCode !== 'undefined') {
            json.currencyCode = this.currencyCode;
        }
        if (typeof this.locale !== 'undefined') {
            json.locale = this.locale;
        }
        if (typeof this.matchedSince !== 'undefined') {
            json.matchedSince = this.matchedSince.toISOString();
        }
        if (this.betIds && this.betIds.size > 0) {
            json.betIds = this.setToJson(this.betIds);
        }
        return json;
    }
    getMarketIds() {
        return this.marketIds;
    }
    setMarketIds(marketIds) {
        this.marketIds = marketIds;
    }
    getPriceProjection() {
        return this.priceProjection;
    }
    setPriceProjection(priceProjection) {
        this.priceProjection = priceProjection;
    }
    getOrderProjection() {
        return this.orderProjection;
    }
    setOrderProjection(orderProjection) {
        this.orderProjection = orderProjection;
    }
    getMatchProjection() {
        return this.matchProjection;
    }
    setMatchProjection(matchProjection) {
        this.matchProjection = matchProjection;
    }
    getIncludeOverallPosition() {
        return this.includeOverallPosition;
    }
    setIncludeOverallPosition(includeOverallPosition) {
        this.includeOverallPosition = includeOverallPosition;
    }
    getPartitionMatchedByStrategyRef() {
        return this.partitionMatchedByStrategyRef;
    }
    setPartitionMatchedByStrategyRef(partitionMatchedByStrategyRef) {
        this.partitionMatchedByStrategyRef = partitionMatchedByStrategyRef;
    }
    getCustomerStrategyRefs() {
        return this.customerStrategyRefs;
    }
    setCustomerStrategyRefs(customerStrategyRefs) {
        this.customerStrategyRefs = customerStrategyRefs;
    }
    getCurrencyCode() {
        return this.currencyCode;
    }
    setCurrencyCode(currencyCode) {
        this.currencyCode = currencyCode;
    }
    getLocale() {
        return this.locale;
    }
    setLocale(locale) {
        this.locale = locale;
    }
    getMatchedSince() {
        return this.matchedSince;
    }
    setMatchedSince(matchedSince) {
        this.matchedSince = matchedSince;
    }
    getBetIds() {
        return this.betIds;
    }
    setBetIds(betIds) {
        this.betIds = betIds;
    }
}
exports.default = ListMarketBookRequest;
//# sourceMappingURL=ListMarketBookRequest.js.map