"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const PriceProjection_1 = require("../sport/PriceProjection");
const OrderProjection_1 = require("../sport/enum/OrderProjection");
const MatchProjection_1 = require("../sport/enum/MatchProjection");
class ListRunnerBookRequest extends JsonRequest_1.default {
    constructor(marketId = '', selectionId = null, handicap = null, priceProjection = new PriceProjection_1.default(), orderProjection = new OrderProjection_1.default(), matchProjection = new MatchProjection_1.default(), includeOverallPosition = null, partitionMatchedByStrategyRef = null, customerStrategyRefs = new Set(), currencyCode = '', locale = '', matchedSince = null, betIds = new Set()) {
        super();
        this.marketId = marketId;
        this.selectionId = selectionId;
        this.handicap = handicap;
        this.priceProjection = priceProjection;
        this.orderProjection = orderProjection;
        this.matchProjection = matchProjection;
        this.includeOverallPosition = includeOverallPosition;
        this.partitionMatchedByStrategyRef = partitionMatchedByStrategyRef;
        this.customerStrategyRefs = customerStrategyRefs;
        this.currencyCode = currencyCode;
        this.locale = locale;
        this.matchedSince = matchedSince;
        this.betIds = betIds;
    }
    fromJson(json) {
        if ('marketId' in json) {
            this.marketId = json.marketId;
        }
        if ('selectionId' in json) {
            this.selectionId = json.selectionId;
        }
        if ('handicap' in json) {
            this.handicap = json.handicap;
        }
        if ('priceProjection' in json) {
            this.priceProjection.fromJson(json.priceProjection);
        }
        if ('orderProjection' in json) {
            this.orderProjection.setValue(json.orderProjection);
        }
        if ('matchProjection' in json) {
            this.matchProjection.setValue(json.matchProjection);
        }
        if ('includeOverallPosition' in json) {
            this.includeOverallPosition = json.includeOverallPosition;
        }
        if ('partitionMatchedByStrategyRef' in json) {
            this.partitionMatchedByStrategyRef = json.partitionMatchedByStrategyRef;
        }
        if ('customerStrategyRefs' in json) {
            this.customerStrategyRefs = json.customerStrategyRefs;
        }
        if ('currencyCode' in json) {
            this.currencyCode = json.currencyCode;
        }
        if ('locale' in json) {
            this.locale = json.locale;
        }
        if ('matchedSince' in json) {
            this.matchedSince = new Date(json.matchedSince);
        }
        if ('betIds' in json) {
            this.betIds = json.betIds;
        }
    }
    toJson() {
        const json = {};
        if (this.marketId !== null) {
            json.marketId = this.marketId;
        }
        if (this.selectionId !== null) {
            json.selectionId = this.selectionId;
        }
        if (this.handicap !== null) {
            json.handicap = this.handicap;
        }
        if (this.priceProjection.isValid()) {
            json.priceProjection = this.priceProjection.toJson();
        }
        if (this.orderProjection.isValid()) {
            json.orderProjection = this.orderProjection;
        }
        if (this.matchProjection.isValid()) {
            json.matchProjection = this.matchProjection;
        }
        if (this.includeOverallPosition !== null) {
            json.includeOverallPosition = this.includeOverallPosition;
        }
        if (this.partitionMatchedByStrategyRef !== null) {
            json.partitionMatchedByStrategyRef = this.partitionMatchedByStrategyRef;
        }
        if (this.customerStrategyRefs.size > 0) {
            json.customerStrategyRefs = this.customerStrategyRefs;
        }
        if (this.currencyCode !== null) {
            json.currencyCode = this.currencyCode;
        }
        if (this.locale !== null) {
            json.locale = this.locale;
        }
        if (this.matchedSince !== null) {
            json.matchedSince = this.matchedSince.toISOString();
        }
        if (this.betIds.size > 0) {
            json.betIds = this.betIds;
        }
        return json;
    }
    isValid() {
        return this.marketId !== null &&
            this.selectionId !== null;
    }
    getMarketId() {
        return this.marketId;
    }
    setMarketId(marketId) {
        this.marketId = marketId;
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
exports.default = ListRunnerBookRequest;
