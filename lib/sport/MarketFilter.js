"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const TimeRange_1 = require("../common/TimeRange");
const MarketBettingType_1 = require("../sport/enum/MarketBettingType");
const OrderStatus_1 = require("../sport/enum/OrderStatus");
class MarketFilter extends JsonMember_1.default {
    constructor(options) {
        super();
        this.textQuery = options.textQuery;
        this.exchangeIds = options.exchangeIds && this.setFromJson(options.exchangeIds);
        this.eventTypeIds = options.eventTypeIds && this.setFromJson(options.eventTypeIds);
        this.eventIds = options.eventIds && this.setFromJson(options.eventIds);
        this.competitionIds = options.competitionIds && this.setFromJson(options.competitionIds);
        this.marketIds = options.marketIds && this.setFromJson(options.marketIds);
        this.venues = options.venues && this.setFromJson(options.venues);
        this.bspOnly = options.bspOnly;
        this.turnInPlayEnabled = options.turnInPlayEnabled;
        this.inPlayOnly = options.inPlayOnly;
        this.marketBettingTypes = options.marketBettingTypes && this.setFromJson(options.marketBettingTypes, MarketBettingType_1.default);
        this.marketCountries = options.marketCountries && this.setFromJson(options.marketCountries);
        this.marketTypeCodes = options.marketTypeCodes && this.setFromJson(options.marketTypeCodes);
        this.marketStartTime = options.marketStartTime && this.fromJson(options.marketStartTime, TimeRange_1.default);
        this.withOrders = options.withOrders && this.setFromJson(options.withOrders, OrderStatus_1.default);
        this.raceTypes = options.raceTypes && this.setFromJson(options.raceTypes);
    }
    toJson() {
        const json = {};
        if (typeof this.textQuery !== 'undefined') {
            json.textQuery = this.textQuery;
        }
        if (this.exchangeIds && this.exchangeIds.size > 0) {
            json.exchangeIds = this.setToJson(this.exchangeIds);
        }
        if (this.eventTypeIds && this.eventTypeIds.size > 0) {
            json.eventTypeIds = this.setToJson(this.eventTypeIds);
        }
        if (this.eventIds && this.eventIds.size > 0) {
            json.eventIds = this.setToJson(this.eventIds);
        }
        if (this.competitionIds && this.competitionIds.size > 0) {
            json.competitionIds = this.setToJson(this.competitionIds);
        }
        if (this.marketIds && this.marketIds.size > 0) {
            json.marketIds = this.setToJson(this.marketIds);
        }
        if (this.venues && this.venues.size > 0) {
            json.venues = this.setToJson(this.venues);
        }
        if (typeof this.bspOnly !== 'undefined') {
            json.bspOnly = this.bspOnly;
        }
        if (typeof this.turnInPlayEnabled !== 'undefined') {
            json.turnInPlayEnabled = this.turnInPlayEnabled;
        }
        if (typeof this.inPlayOnly !== 'undefined') {
            json.inPlayOnly = this.inPlayOnly;
        }
        if (this.marketBettingTypes && this.marketBettingTypes.size > 0) {
            json.marketBettingTypes = this.setToJson(this.marketBettingTypes);
        }
        if (this.marketCountries && this.marketCountries.size > 0) {
            json.marketCountries = this.setToJson(this.marketCountries);
        }
        if (this.marketTypeCodes && this.marketTypeCodes.size > 0) {
            json.marketTypeCodes = this.setToJson(this.marketTypeCodes);
        }
        if (this.marketStartTime) {
            json.marketStartTime = this.marketStartTime.toJson();
        }
        if (this.withOrders && this.withOrders.size > 0) {
            json.withOrders = this.setToJson(this.withOrders);
        }
        if (this.raceTypes && this.raceTypes.size > 0) {
            json.raceTypes = this.setToJson(this.raceTypes);
        }
        return json;
    }
    getTextQuery() {
        return this.textQuery;
    }
    setTextQuery(textQuery) {
        this.textQuery = textQuery;
    }
    getExchangeIds() {
        return this.exchangeIds;
    }
    setExchangeIds(exchangeIds) {
        this.exchangeIds = exchangeIds;
    }
    getEventTypeIds() {
        return this.eventTypeIds;
    }
    setEventTypeIds(eventTypeIds) {
        this.eventTypeIds = eventTypeIds;
    }
    getEventIds() {
        return this.eventIds;
    }
    setEventIds(eventIds) {
        this.eventIds = eventIds;
    }
    getCompetitionIds() {
        return this.competitionIds;
    }
    setCompetitionIds(competitionIds) {
        this.competitionIds = competitionIds;
    }
    getMarketIds() {
        return this.marketIds;
    }
    setMarketIds(marketIds) {
        this.marketIds = marketIds;
    }
    getVenues() {
        return this.venues;
    }
    setVenues(venues) {
        this.venues = venues;
    }
    getBspOnly() {
        return this.bspOnly;
    }
    setBspOnly(bspOnly) {
        this.bspOnly = bspOnly;
    }
    getTurnInPlayEnabled() {
        return this.turnInPlayEnabled;
    }
    setTurnInPlayEnabled(turnInPlayEnabled) {
        this.turnInPlayEnabled = turnInPlayEnabled;
    }
    getInPlayOnly() {
        return this.inPlayOnly;
    }
    setInPlayOnly(inPlayOnly) {
        this.inPlayOnly = inPlayOnly;
    }
    getMarketBettingTypes() {
        return this.marketBettingTypes;
    }
    setMarketBettingTypes(marketBettingTypes) {
        this.marketBettingTypes = marketBettingTypes;
    }
    getMarketCountries() {
        return this.marketCountries;
    }
    setMarketCountries(marketCountries) {
        this.marketCountries = marketCountries;
    }
    getMarketTypeCodes() {
        return this.marketTypeCodes;
    }
    setMarketTypeCodes(marketTypeCodes) {
        this.marketTypeCodes = marketTypeCodes;
    }
    getMarketStartTime() {
        return this.marketStartTime;
    }
    setMarketStartTime(marketStartTime) {
        this.marketStartTime = marketStartTime;
    }
    getWithOrders() {
        return this.withOrders;
    }
    setWithOrders(withOrders) {
        this.withOrders = withOrders;
    }
    getRaceTypes() {
        return this.raceTypes;
    }
    setRaceTypes(raceTypes) {
        this.raceTypes = raceTypes;
    }
}
exports.default = MarketFilter;
//# sourceMappingURL=MarketFilter.js.map